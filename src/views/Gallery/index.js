import { useState, useEffect } from "react";
import { BaseLayout, Card, Loading } from "../../Components";
import { s3 } from "../../utils/Aws";
import { Wrapper } from "./styles";

// Mocked data

const Gallery = () => {
  const [dataImages, setDataImages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = () => {
    s3.listObjects({ Bucket: process.env.REACT_APP_S3BUCKET }, (err, data) => {
      if (err) throw err;
      console.log(data);
      setDataImages(data.Contents);
    });
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
                url={`https://neonrestart.s3.sa-east-1.amazonaws.com/${Key}`}
              >
                {Key.replace(".jpg", "")}
              </Card>
            ))
          )
        ) : (
          <span>Falha ao carregar as imagens</span>
        )}
      </Wrapper>
    </BaseLayout>
  );
};

export default Gallery;
