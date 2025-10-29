interface Frontmatter {
  date: string;
  title: string;
  slug?: string;
  category: string;
  template: string;
  description?: string;
  tags?: Array<string>;
<<<<<<< HEAD
  socialImage?: {
    publicURL: string;
  };
=======
  thumbnail?: string;
>>>>>>> main
}

export default Frontmatter;
