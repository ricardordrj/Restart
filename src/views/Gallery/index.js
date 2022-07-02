import { useState, useEffect } from "react";
import { BaseLayout, Card, Loading, Pagination } from "../../Components";
import { s3 } from "../../utils/Aws";
import { Wrapper } from "./styles";

// Mocked data

const Gallery = () => {
  const [dataImages, setDataImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pagination, setPagination] = useState([]);

  const fetchData = (next) => {
    s3.listObjectsV2(
      {
        Bucket: process.env.REACT_APP_S3BUCKET,
        MaxKeys: 2,
        ContinuationToken: next,
      },
      (err, data) => {
        if (err) throw err;
        console.log(data);
        setDataImages(data.Contents);
        if (data.IsTruncated) {
          console.log("get further list...");
          setPagination(data.NextContinuationToken);
        }
      }
    );
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 500);
  }, []);

  return (
    <BaseLayout>
      <h3>Image Gallery</h3>
      <Wrapper>
        {dataImages ? (
          isLoading ? (
            <Loading />
          ) : (
            dataImages.map(({ Key }) => (
              <Card
                key={Key}
                title={Key.replace(".jpg", "")}
                url={`${process.env.REACT_APP_S3_IMAGE_URL$}${Key}`}
              >
                {Key.replace(".jpg", "")}
              </Card>
            ))
          )
        ) : (
          <span>Falha ao carregar as imagens</span>
        )}
        <Pagination
          total={2}
          activePage={1}
          onClick={() => fetchData(pagination)}
        />
      </Wrapper>
    </BaseLayout>
  );
};

export default Gallery;
