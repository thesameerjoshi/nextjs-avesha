



export default function Home() {
  return (
    <> 
      <div className="font-syne">
        <h1 className="text-center text-3xl sm:text-6xl sm:pt-20 pt-10 font-bold">Hello from NextJs, Tailwind and DaisyUi</h1>
        <div className="flex flex-col container max-w-sm mx-auto sm:max-w-lg">
          <p className="text-center p-5">Get Started by cloning the repo</p>
          <div className="mockup-code">
            <pre data-prefix="$"><code>git clone https://github.com/default-sameer/nextjs-tailwind-starter-template</code></pre>
          </div>
        </div>
      </div>
    </>
  )
}
