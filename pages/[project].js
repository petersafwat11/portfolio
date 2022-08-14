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

  