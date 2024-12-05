import Link from 'next/link'
import { FaGithub, FaLinkedin} from 'react-icons/fa'

const socials = [
  {icon: <FaGithub />, path: "https://github.com/sally033005"},
  {icon: <FaLinkedin />, path: "http://www.linkedin.com/in/sally-tszwaicheung"}
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social