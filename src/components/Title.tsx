interface TitleProps{
    title: string
}
const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="uppercase font-bold text-center text-3xl p-10 ">
      {title}
    </h1>
  );
};

export default Title
