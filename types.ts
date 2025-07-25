type ImageType = {
  asset: {
    _id: string;
    url: string;
  };
};

// export type BannerType = {
//   _id: string;
//   name: string;
//   content: string;
//   image: ImageType;
// };

// export type AboutMeType = {
//   _id: string;
//   title: string;
//   subContent: string;
//   subtitle: string;
//   mainContent: string;
// };

type ExperienceItem = {
  _id: string;
  company: string;
  name: string;
  role: string;
  date: string;
  tasks: string[];
};

export type ExperienceType = [ExperienceItem];

type Stack = { title: string; stackImage: ImageType };

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

export type StacksType = {
  stackImage: ImageType[];
};

export type IconType = {
  _id: string;
  svg: string;
  title: string;
}[];
