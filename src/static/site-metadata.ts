interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://lzhzlw.github.io/running_page/',
  logo: 'https://media.istockphoto.com/id/1346624734/vector/child-boy-in-sportswear-running-fast-flat-cartoon-vector-illustration-isolated.jpg?s=612x612&w=0&k=20&c=2T7kMNZoZkD5UQrW3Qzizbj3t8r-lzKo58yiw5jZupM=',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'About Me',
      url: 'https://lzhzlw.github.io/',
    },
  ],
};

export default data;
