

const Message = ({variant , childern}) => {
  return (
    <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
  <div className="flex items-start gap-4">
    <span className={`${variant === 'danger' ? 'text-red-600':"text-green-600"}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>

    <div className="flex-1">
      <strong className="block font-medium text-gray-900">  </strong>

      <p className="mt-1 text-sm text-gray-700">{childern}</p>
    </div>

    <button className="text-gray-500 transition hover:text-gray-600">
      <span className="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>
  )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message