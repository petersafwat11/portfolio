import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { useContext } from 'react';
import Ctx from '../store/Context';
import OneProject from '../components/OneProject'


const Project = () => {
  const context = useContext(Ctx);
  const {projects} = context; 

 return (
  projects.map((project)=>(<OneProject project={project}/>))
  );
};

export default Project

export async function getStaticPaths() {
    return {
      fallback: false,
      paths: [
        {
          params: {
            project: 'instagram',
          },
        },
      ],
    };
  }
  
  export async function getStaticProps(context) {  
    const meetupId = context.params.project;
    
    return {
      props: {
        meetupData: {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
          id: meetupId,
          title: 'First Meetup',
          address: 'Some Street 5, Some City',
          description: 'This is a first meetup',
        },
      },
    };
  }
  