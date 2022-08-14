import Ctx from './Context';
import instagram from '../public/assets/instagram.PNG';

const ContextProvider = (props) => {    
    const context ={
         projects: [
             {
               img: instagram ,
               name:'instagram' ,
               technology: ['react', 'nextJs', 'tailwind'],
               ovarview:' this is an instagram clone that have some of its features such as the abialaty to post, like, comment and have a profile using google provider authentecation. i used some packages to simulate the the look of instagram such as minifaker to get me some random names, photos and titles for the stories section and the suggestion section. i used nextjs for dynamic routes and serverside rendering. react hooks to manage state, tailwind for styling and react icons for icons' ,
               code: 'https://github.com/petersafwat11/instagram' ,
               demo: 'https://instagram-sepia.vercel.app/' ,
               allTechnologies: ['react', 'nextJs', 'tailwindcss', 'firbase-database', 'recoil', 'minifaker', 'next-auth' , 'google provider auth']
            }]  
    };
  return (
        <Ctx.Provider value={context}>
            {props.children}
        </Ctx.Provider>
    )
}

export default ContextProvider;
