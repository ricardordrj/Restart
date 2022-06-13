import { BaseLayout, Card } from "../../Components";

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
  ];

  return (
    <BaseLayout>
      <h3>Image Gallery</h3>
      {dataImages ? (
        dataImages.map((image) => (
          <Card key={image.name} title={image.name}>
            {image.name}
          </Card>
        ))
      ) : (
        <span>Falha ao carregar as imagens</span>
      )}
    </BaseLayout>
  );
};

export default Gallery;
