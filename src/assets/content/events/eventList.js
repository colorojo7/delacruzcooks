const baseRoute = "/images/events/";

const eventsList = [

 
  {
    id: "01",
    title: "Titulo 1",
    subtitle: "This is an event",
    description:"description event, event description description event, event description description event, event description description event, event description",
    date:"10/06/2025",
    time:"18:00",
    location:{
        state:"Buenos Aires",
        city:"Buenos Aires",
        address:"Av. Corrientes 1234",
        postcode:"C1043ABC",
    },

    image_1: `${baseRoute}eventPizza.jpeg`,
    galery: [],
    link:"",
    text:["paragraph1", "paragraf 2"]  
  },

 
  
];

export default eventsList;
