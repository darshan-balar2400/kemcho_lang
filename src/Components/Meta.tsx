interface props{
    title:string,
    description:string,
    keywords:string,
    image:string,
    url:string,
    type:string
}
const Meta = ({ title, description, keywords, image, url, type }:props) => {
    return (
      <>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
  
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />
  
        {/* social media */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
  
        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={url} />
        <meta property="twitter:type" content={type} />
        <meta name="twitter:image:alt" content={title}></meta>
      </>
    );
  };
  
  export default Meta;
  