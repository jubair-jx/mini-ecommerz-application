function HomeSectionTitle({
  mainTitle,
  subTitle,
}: {
  mainTitle?: string;
  subTitle?: string;
}) {
  return (
    <div className="my-6 text-center relative mx-auto flex justify-center flex-col items-center font-roboto">
      <h1 className=" font-roboto font-semibold sm:text-4xl text-2xl px-4 text-gray-900 text-center">
        {mainTitle}
      </h1>
      <p className=" mt-1 font-roboto font-medium sm:text-sm text-xs px-4 w-5/6 mx-auto">
        {subTitle}
      </p>
    </div>
  );
}

export default HomeSectionTitle;
