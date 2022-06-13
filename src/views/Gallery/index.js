import { useState, useEffect } from "react";
import { BaseLayout, Card, Loading } from "../../Components";
import { Wrapper } from "./styles";

// Mocked data
import { dataMock } from "./dataMock";

const Gallery = () => {
  const [dataImages, setDataImages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = () => {
    setDataImages(dataMock);
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
            dataImages.map((image) => (
              <Card key={image.name} title={image.name} url={image.url}>
                {image.name}
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
