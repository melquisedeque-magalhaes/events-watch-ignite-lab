interface LessonInfosProps {
  title: string
  description: string
  teacher: {
    name: string
    bio: string
    avatarURL: string
  }
}

export function LessonInfos({ description, teacher, title }: LessonInfosProps){
  return(
    <div className="flex-1">

      <strong className="text-2xl text-gray-100">
        {title}
      </strong>

      <p className="text-base text-gray-200">
        {description}
      </p>

      <div className="flex mt-6 gap-4 leading-relaxed">
        <img 
          src={teacher?.avatarURL}
          alt={teacher?.name}
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />

        <div>
          <span className="font-bold text-2xl text-gray-100">{teacher?.name}</span>
          <p className="text-sm text-gray-300">{teacher?.bio}</p>
        </div>

      </div>
      
    </div>
  )
}