import { BaseLayout, Card } from "../../Components";
import { Wrapper } from "./styles";

const Gallery = () => {
  const dataImages = [
    {
      name: "teste",
      url: "/teste",
    },
    {
      name: "teste2",
      url: "/teste",
    },
    {
      name: "teste3",
      url: "/teste",
    },
    {
      name: "teste4",
      url: "/teste",
    },
    {
      name: "teste5",
      url: "/teste",
    },
    {
      name: "teste6",
      url: "/teste",
    },
  ];

  return (
    <BaseLayout>
      <h3>Image Gallery</h3>
      <Wrapper>
        {dataImages ? (
          dataImages.map((image) => (
            <Card key={image.name} title={image.name} url={image.url}>
              {image.name}
            </Card>
          ))
        ) : (
          <span>Falha ao carregar as imagens</span>
        )}
      </Wrapper>
    </BaseLayout>
  );
};

export default Gallery;
