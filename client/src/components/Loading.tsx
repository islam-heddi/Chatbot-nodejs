import BeatLoader from "react-spinners/BeatLoader"
function Loading({loading}: {loading: boolean}) {
  return (
    <div className={`${loading ? 'flex' : 'hidden'}  mb-4  justify-start`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-gray-200 text-gray-800 rounded-bl-none`}
      >
        <div className="flex flex-row items-center gap-1.5 flex-wrap">
        <BeatLoader size={10} />
        <p className="text-sm">Ai is Thinking</p>
        </div>
      </div>
    </div>
  )

}

export default Loading