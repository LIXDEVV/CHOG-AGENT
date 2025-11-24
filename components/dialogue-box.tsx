import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"

interface DialogueBoxProps {
  text: string
  type: "agent" | "thinking" | "success" | "error"
}

export default function DialogueBox({ text, type }: DialogueBoxProps) {
  const getStyles = () => {
    switch (type) {
      case "thinking":
        return "bg-purple-900/40 border border-purple-700/50 text-purple-300 italic"
      case "success":
        return "bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-100"
      case "error":
        return "bg-red-500/10 border border-red-500/30 text-red-100"
      case "agent":
      default:
        // Updated agent style to purple/fuchsia
        return "bg-purple-500/10 border border-purple-500/30 text-purple-100 shadow-lg shadow-purple-500/10"
    }
  }

  const renderIcon = () => {
    switch (type) {
      case "thinking":
        return <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
      case "success":
        return <CheckCircle className="w-4 h-4 inline mr-2" />
      case "error":
        return <AlertCircle className="w-4 h-4 inline mr-2" />
      default:
        return null
    }
  }

  return (
    <div
      className={`p-3 rounded-lg text-sm leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300 ${getStyles()}`}
    >
      {renderIcon()}
      {text}
    </div>
  )
}
