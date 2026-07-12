  const message = 'This is a simple welcome page built with HTML and Tailwind CSS.!';
  const date = '12 july 2026';

  function getDate(){
    const date = new Date();
    return date.toLocaleDateString();
  }

  const data = {
    message: 'This is a simple welcome page built with HTML and Tailwind CSS.!',
    date: '12 july 2026' ,
    tasks: [1, 2, 3, 4],
  };

const cards = [
  {
    img: "https://picsum.photos/400/250?random=1",
    title: "Learn HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    img: "https://picsum.photos/400/250?random=2",
    title: "Learn CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    img: "https://picsum.photos/400/250?random=3",
    title: "Learn JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
];

const people = [
  {
    image: "https://media.istockphoto.com/id/1928147121/photo/portrait-of-cheerful-it-professional-in-office.jpg?s=612x612&w=0&k=20&c=swcaqFsthGu3hRVJTBgOToqYtxu66Je2auGKSuJPuqY=",
    name: "John Doe",
    designation: "Frontend Developer",
    location: "New York, USA",
  },
  {
    image: "https://i.postimg.cc/hP7m22jz/this-is-where-i-let-my-imagination-get-work-portrait-young-man-standing-office-with-designers-backgr.avif",
    name: "Sarah Smith",
    designation: "UI/UX Designer",
    location: "London, UK",
  },
  {
    image: "https://i.postimg.cc/T15KHPTs/portrait-joyful-young-software-developer-working-laptop-modern-office-274689-46339.avif",
    name: "Michael Johnson",
    designation: "Backend Developer",
    location: "Toronto, Canada",
  },
];


  // export {data}
  // export default data
  export default people;