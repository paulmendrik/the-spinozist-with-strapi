export default function PageTitle({ children }) {
  return (
    <h1 className="text-3xl font-semibold leading-9 tracking-tight  dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 title">
      {children}
    </h1>
  )
}
