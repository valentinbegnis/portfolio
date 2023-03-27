type ProjectType = {
  name: string
  description: string
  images: Array<string>
  githubUrl: string
  deployUrl: string
  stackUsed: Array<string>
};

type TechnologiesOptions = {
  [key: string]: string
};
