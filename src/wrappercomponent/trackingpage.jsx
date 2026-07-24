"use client"

import { useState } from "react"
import axios from "axios"
import { IoClose } from 'react-icons/io5'
import { MdSearch, MdCheckCircle, MdError, MdTrendingUp, MdWarning } from 'react-icons/md'
import { BiLoader } from 'react-icons/bi'

const apiUrl = "https://mozbackend.bellaryinfotech.com/api/issues"

const TrackingIdStatus = ({ onShowToast }) => {
  const [showModal, setShowModal] = useState(false)
  const [trackingIdInput, setTrackingIdInput] = useState("")
  const [trackingData, setTrackingData] = useState(null)
  const [showProgress, setShowProgress] = useState(false)

  const statusColors = {
    Pending: { bg: "bg-yellow-100", text: "text-yellow-800", border: "border-yellow-300", icon: MdWarning },
    "In Progress": { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-300", icon: BiLoader },
    "In Journey": { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-300", icon: MdTrendingUp },
    Completed: { bg: "bg-green-100", text: "text-green-800", border: "border-green-300", icon: MdCheckCircle },
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!trackingIdInput.trim()) {
      onShowToast("Please enter tracking ID", "error")
      return
    }

    setShowProgress(true)

    try {
      const response = await axios.get(`${apiUrl}/${trackingIdInput.toUpperCase()}`)
      const data = response.data
      setTrackingData({
        trackingId: data.trackingId,
        mobileBrand: data.mobileBrand,
        issueType: data.issueType,
        status: data.status || "Pending",
        progress: data.progress || 0,
      })
      setShowProgress(false)
      onShowToast("✅ Status found!", "success")
    } catch (error) {
      setTrackingData(null)
      setShowProgress(false)
      if (error.response?.status === 404) {
        onShowToast("Tracking ID not found", "error")
      } else {
        onShowToast("Error fetching status", "error")
      }
    }
  }

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-azhar-dark to-azhar-brown text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base flex items-center justify-center gap-2"
      >
        <MdSearch size={20} />
         Track Status
      </button>

      {/* Modal Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowModal(false)}
        >
          {/* Tracking Modal */}
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-azhar-dark to-azhar-brown text-white p-5 sm:p-6 flex items-center justify-between border-b border-gray-200">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                  <MdSearch size={28} />
                  Track Your Repair
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 mt-0.5">Enter your Tracking ID to check status</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-all"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              {/* Search Form */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="e.g., M-V-G-ABC123XYZ"
                    value={trackingIdInput}
                    onChange={(e) => setTrackingIdInput(e.target.value.toUpperCase())}
                    className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-azhar-red focus:outline-none transition-all text-sm"
                  />
                  <button
                    type="submit"
                    disabled={showProgress}
                    className="px-6 py-2.5 bg-azhar-red text-white font-bold rounded-lg hover:bg-azhar-dark transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
                  >
                    <MdSearch size={18} />
                    {showProgress ? "Searching..." : "Search"}
                  </button>
                </div>
              </form>

              {/* Loading */}
              {showProgress && (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <BiLoader size={48} className="text-azhar-red animate-spin" />
                  </div>
                  <p className="text-center text-gray-600 text-sm font-semibold">Searching your repair status...</p>
                </div>
              )}

              {/* Results */}
              {trackingData && !showProgress && (
                <div className="space-y-5">
                  {/* Progress Section */}
                  <div className="bg-gradient-to-r from-azhar-red/10 to-orange-100 rounded-xl p-4 border border-azhar-red/20">
                    <div className="flex items-center gap-2 mb-3">
                      <MdTrendingUp size={20} className="text-azhar-red" />
                      <p className="text-xs text-gray-600 font-bold">REPAIR PROGRESS</p>
                    </div>
                    <div className="mb-3">
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-azhar-red to-orange-500 transition-all duration-500"
                          style={{ width: `${trackingData.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-azhar-dark">{trackingData.progress}% Complete</p>
                  </div>

                  {/* Details Table */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-azhar-dark flex items-center gap-2">
                      <MdCheckCircle size={22} className="text-green-600" />
                      Repair Details
                    </h3>

                    <div className="space-y-2">
                      {/* Tracking ID */}
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all">
                        <span className="text-xs sm:text-sm text-gray-600 font-semibold">Tracking ID</span>
                        <span className="text-xs sm:text-sm font-bold text-azhar-dark font-mono">{trackingData.trackingId}</span>
                      </div>

                      {/* Brand */}
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all">
                        <span className="text-xs sm:text-sm text-gray-600 font-semibold">📱 Mobile Brand</span>
                        <span className="text-xs sm:text-sm font-bold text-azhar-dark">{trackingData.mobileBrand}</span>
                      </div>

                      {/* Issue Type */}
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all">
                        <span className="text-xs sm:text-sm text-gray-600 font-semibold">🔧 Issue Type</span>
                        <span className="text-xs sm:text-sm font-bold text-azhar-dark">{trackingData.issueType}</span>
                      </div>

                      {/* Status */}
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <span className="text-xs sm:text-sm text-gray-600 font-semibold">Current Status</span>
                        <div className={`text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full border flex items-center gap-1.5 ${statusColors[trackingData.status]?.bg} ${statusColors[trackingData.status]?.text} ${statusColors[trackingData.status]?.border}`}>
                          {(() => {
                            const config = statusColors[trackingData.status];
                            const IconComponent = config?.icon;
                            return IconComponent ? (
                              <>
                                <IconComponent size={16} />
                                {trackingData.status}
                              </>
                            ) : trackingData.status;
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-azhar-red/10 border-l-4 border-azhar-red rounded-lg p-4 flex gap-3">
                    <MdWarning size={20} className="text-azhar-red flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-azhar-dark">
                      Our team will reach you soon. Check WhatsApp for live updates.
                    </p>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {!trackingData && !showProgress && (
                <div className="text-center py-8">
                  <div className="text-5xl mb-3">🔍</div>
                  <p className="text-gray-600 text-sm font-semibold">Enter your tracking ID above to check status</p>
                  <p className="text-xs text-gray-500 mt-2">Format: M-V-G-ABC123XYZ</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TrackingIdStatus