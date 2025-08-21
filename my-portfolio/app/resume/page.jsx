"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"; 
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: 'About Me',
  description: `I'm a Computer Programming graduate from Humber College with a focus on full-stack development. 
  I build responsive and dynamic web applications using technologies like React, Next.js, Tailwind CSS, Node.js, and Express. 
  I'm passionate about writing clean, scalable code and continuously expanding my skills to create user-centered solutions.`,  
  info: [
    {
      fieldName: 'Name',
      value: 'Sally Cheung'
    },
    {
      fieldName: 'Phone',
      value: '(+1) 647 855 3806',
    },
    {
      fieldName: 'Email',
      value: 'sally033008@gmail.com',
    }
  ]
}

const experience = {
  icon: '/asserts/resume/badge.svg',
  title: 'My Experience',
  description: 'I have experience in web development. I have worked on various projects and have experience in front-end and back-end technologies.',
  items: [
    {
      company: 'Po Shing Medical (Hong Kong) Limited',
      position: 'Clerk',
      duration: '2017 - 2023',
    },
    {
      company: 'Salala Education Group Limited',
      position: 'Administrative Assistant',
      duration: '2014 - 2016',
    },
    {
      company: 'Ngong Ping 360 Limited',
      position: 'Part-time Retail Sales Assistant',
      duration: 'Summer 2014',
    }
  ]
}

const education = {
  icon: '/asserts/resume/cap.svg',
  title: 'My Education',
  description: 'I hold a diploma in Computer Programming and a bachelor’s degree in History. My education has equipped me with both technical and analytical skills to solve real-world problems.',
  items: [
    {
      institution: 'Humber College',
      degree: 'Diploma in Computer Programming',
      duration: '2023 - 2025',
    },
    {
      institution: 'Lingnan University',
      degree: 'Bachelor of History',
      duration: '2013 - 2017',
    },
  ]
}

const skills = {
  title: 'My Skills',
  description: 'I have experience in various programming languages and technologies. I am proficient in front-end and back-end technologies.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'React',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {
        delay: 2.4, duration: 0.4, ease: 'easeIn'
      },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px] " >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="about" > About me</TabsTrigger>
            <TabsTrigger value="skills"> Skills </TabsTrigger>
            <TabsTrigger value="education"> Education </TabsTrigger>
            <TabsTrigger value="experience"> Experience </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
          <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold ">{about.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description} 
                  </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.value}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description} </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
                </div>
            </TabsContent>
            
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{education.description}</p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return(
                        <li 
                        key={index} 
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.degree}</h3>
                          <div className="flex items-center gap-3 ">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      )
                      })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{experience.description}</p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return(
                        <li 
                        key={index} 
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.position}</h3>
                          <div className="flex items-center gap-3 ">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      )
                      })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;