const baseRoute = "/images/recipies/";

const recipiesList = [
  {
    id: "emp001",
    title: "Empanadas",
    subtitle: "Delicius Argentinian Pie",
    description:"Lorem ipsum dolor sit amet consectetur adipiscing elit, vestibulum justo himenaeos vulputate posuere aliquet, ",
    image_1: `${baseRoute}empanadas.jpeg`,
    
    ingredients: ["ingrediente 300gr", "otro ingrediente 2kg", "algo mas 3 unidades" , "ingrediente 300gr", "otro ingrediente 2kg", "algo mas 3 unidades","ingrediente 300gr", "otro ingrediente 2kg", "algo mas 3 unidades","ingrediente 300gr", "otro ingrediente 2kg", "algo mas 3 unidades","ingrediente 300gr", "otro ingrediente 2kg", "algo mas 3 unidades"],
    steps: ["Lorem ipsum dolor sit amet consectetur adipiscing elit, vestibulum justo himenaeos vulputate posuere aliquet, mus quis mollis laoreet parturient molestie cum, commodo fusce in fermentum sem. Massa curabitur ac platea porta egestas augue, et tellus dignissim urna cras, molestie vehicula est orci enim. Fames hendrerit natoque gravida commodo pretium ad montes duis risus, purus feugiat imperdiet non sodales nostra nunc facilisi, posuere netus leo cursus dignissim venenatis suspendisse cubilia.","This is the second stept text text text text text text text text text text text text", 
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, vestibulum justo himenaeos vulputate posuere aliquet, mus quis mollis laoreet parturient molestie cum, commodo fusce in fermentum sem. Massa curabitur ac platea porta egestas augue, et tellus dignissim urna cras, molestie vehicula est orci enim. Fames hendrerit natoque gravida commodo pretium ad montes duis risus, purus feugiat imperdiet non sodales nostra nunc facilisi, posuere netus leo cursus dignissim venenatis suspendisse cubilia.","This is the second stept text text text text text text text text text text text text", "Lorem ipsum dolor sit amet consectetur adipiscing elit, vestibulum justo himenaeos vulputate posuere aliquet, mus quis mollis laoreet parturient molestie cum, commodo fusce in fermentum sem. Massa curabitur ac platea porta egestas augue, et tellus dignissim urna cras, molestie vehicula est orci enim. Fames hendrerit natoque gravida commodo pretium ad montes duis risus, purus feugiat imperdiet non sodales nostra nunc facilisi, posuere netus leo cursus dignissim venenatis suspendisse cubilia.","This is the second stept text text text text text text text text text text text text"],
    galery: [],
    videoLink:"",
    dificulty: "Medium",
    time: "3hs",
  },
  {
    id: "chi001",
    title: "Chimichurry",
    subtitle: "A grete companion for your stake",
    image_1: `${baseRoute}chimi.jpeg`,
    ingredients: [],
    steps: [],
    galery: [],
    dificulty: "Easy",
    time: "1hr",
  },
  {
    id: "piz001",
    title: "Pizza",
    subtitle: "Gluten free and crunchy base!",
    image_1: `${baseRoute}pizza.jpeg`,
    ingredients: [],
    steps: [],
    galery: [],
    dificulty: "Easy",
    time: "2hs 30min",
  },
  {
    id: "emp002",
    title: "Empanadas",
    subtitle: "Delicius Argentinian Pie",
    image_1: `${baseRoute}empanadas.jpeg`,
    ingredients: [],
    steps: [],
    galery: [],
    dificulty: "",
    time: "",
  },
  {
    id: "chi002",
    title: "Chimichurry",
    subtitle: "A grete companion for your stake",
    image_1: `${baseRoute}chimi.jpeg`,
    ingredients: [],
    steps: [],
    galery: [],
    dificulty: "",
    time: "",
  },
  {
    id: "piz002",
    title: "Pizza",
    subtitle: "Gluten free and crunchy base!",
    image_1: `${baseRoute}pizza.jpeg`,
    ingredients: [],
    steps: [],
    galery: [],
    dificulty: "",
    time: "",
  },
];

export default recipiesList;
