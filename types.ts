type ImageType = {
  asset: {
    _id: string;
    url: string;
  };
};

type ExperienceItem = {
  company: string;
  name: string;
  role: string;
  date: string;
  tasks: string[];
};

export type ExperienceType = [ExperienceItem];

type Stack = { stackName: string; image: ImageType };

export type ProjectItemType = {
  _id: string;
  projectDescription: string;
  projectLink: string;
  gitLink: string;
  projectName: string;
  title: string;
  image: ImageType;
  stacks: Stack[];
};

export type ProjectsType = [ProjectItemType];

// *[_type == "projects"]{
//   _id,
//     projectDescription,
//     projectLink,
//     projectName,
//     title,
//     image{
//     asset->{
//       _id,
//       url,
//     }
//     },
//   stacks[]{
//     stackName,
//     image{
//       asset->{
//         _id,
//         url
//       }
//     }
//   }
// }
