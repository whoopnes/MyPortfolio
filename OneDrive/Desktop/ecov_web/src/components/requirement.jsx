import { GraduationCap, Users, UserCheck } from "lucide-react"

export default function GeneralRequirements() {
  return (
    <div id="requirements" className="w-full max-w-7xl mx-auto px-4 py-16 bg-white-50">
      <h2 className="text-3xl md:text-[48px] text-center font-black mb-8 md:mb-16 font-gotham">GENERAL REQUIREMENTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* req 1 */}
        <div className="bg-green-200 rounded-lg p-6 shadow-lg">
          <div className="flex flex-col items-center">
            <div className="bg-emerald-500 rounded-full p-4 mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <p className="text-black-800 font-semibold text-center">
              Open to international active university students (Diploma D3/D4 or Bachelor's S1) from any university,
              faculty, or department
            </p>
          </div>
        </div>

        {/* req 2 */}
        <div className="bg-green-200 rounded-lg p-6 shadow-lg">
          <div className="flex flex-col items-center">
            <div className="bg-emerald-500 rounded-full p-4 mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <p className="text-black-800 font-semibold text-center">
              Teams must consist of 2–3 members; individuals can register alone and be matched by the committee
            </p>
          </div>
        </div>

        {/* req 3 */}
        <div className="bg-green-200 rounded-lg p-6 shadow-lg">
          <div className="flex flex-col items-center">
            <div className="bg-emerald-500 rounded-full p-4 mb-4">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <p className="text-black-800 font-semibold text-center">
              Members can't be replaced after registration, one person can only join one team, and each team must
              appoint a leader for registration
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
