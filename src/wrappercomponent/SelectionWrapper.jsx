"use client"

import { useState } from "react"
import NewEntryIssue from "../wrappercomponent/newissuepage"
import TrackingIdStatus from "../wrappercomponent/trackingpage"
import { FiPlus, FiSearch } from 'react-icons/fi'
import { MdSpeed, MdCheckCircle, MdShield } from 'react-icons/md'
import { IoSparkles } from 'react-icons/io5'

const SelectionWrapper = ({ onShowToast }) => {
  const [activeTab, setActiveTab] = useState("entry")

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Background Decoration */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-azhar-red/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-azhar-brown/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Container */}
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IoSparkles size={28} className="text-azhar-red" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-azhar-dark">
              Repair Management
            </h1>
            <IoSparkles size={28} className="text-azhar-red" />
          </div>
          <p className="text-xs sm:text-sm text-gray-600">Create issues or track your repair status in seconds</p>
        </div>

        {/* Tab Wrapper */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Tab Buttons */}
          <div className="relative flex border-b border-gray-200 bg-gray-50">
            {/* Animated Indicator */}
            <div
              className={`absolute bottom-0 h-1 bg-gradient-to-r from-azhar-red to-azhar-brown transition-all duration-300 ${
                activeTab === "entry" ? "left-0 w-1/2" : "left-1/2 w-1/2"
              }`}
            ></div>

            {/* Tab Button 1 */}
            <button
              onClick={() => setActiveTab("entry")}
              className={`flex-1 px-4 sm:px-6 py-4 sm:py-5 font-bold text-sm sm:text-base transition-all relative flex items-center justify-center gap-2 ${
                activeTab === "entry"
                  ? "text-azhar-dark"
                  : "text-gray-600 hover:text-azhar-dark"
              }`}
            >
              <FiPlus size={20} />
              New Issue Entry
            </button>

            {/* Tab Button 2 */}
            <button
              onClick={() => setActiveTab("tracking")}
              className={`flex-1 px-4 sm:px-6 py-4 sm:py-5 font-bold text-sm sm:text-base transition-all relative flex items-center justify-center gap-2 ${
                activeTab === "tracking"
                  ? "text-azhar-dark"
                  : "text-gray-600 hover:text-azhar-dark"
              }`}
            >
              <FiSearch size={20} />
              Track Status
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-5 sm:p-8">
            {/* Entry Tab */}
            {activeTab === "entry" && (
              <div className="animate-fadeIn">
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-azhar-red/10 px-4 py-2 rounded-full mb-3">
                      <FiPlus size={16} className="text-azhar-red" />
                      <span className="text-xs sm:text-sm font-bold text-azhar-red">CREATE NEW</span>
                    </div>
                    <h2 className="text-2xl font-bold text-azhar-dark mb-1">Create Issue Request</h2>
                    <p className="text-xs sm:text-sm text-gray-600">Fill in your device details and issue type to get started</p>
                  </div>
                  <NewEntryIssue onShowToast={onShowToast} />
                </div>
              </div>
            )}

            {/* Tracking Tab */}
            {activeTab === "tracking" && (
              <div className="animate-fadeIn">
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-azhar-dark/10 px-4 py-2 rounded-full mb-3">
                      <FiSearch size={16} className="text-azhar-dark" />
                      <span className="text-xs sm:text-sm font-bold text-azhar-dark">TRACK LIVE</span>
                    </div>
                    <h2 className="text-2xl font-bold text-azhar-dark mb-1">Track Your Repair</h2>
                    <p className="text-xs sm:text-sm text-gray-600">Enter your tracking ID to see real-time status updates</p>
                  </div>
                  <TrackingIdStatus onShowToast={onShowToast} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 sm:mt-12">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 group">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <MdSpeed size={24} className="text-blue-600" />
            </div>
            <h3 className="font-bold text-azhar-dark text-sm mb-1">Fast Repairs</h3>
            <p className="text-xs text-gray-600">30-60 minutes turnaround time on most repairs</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 group">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <MdCheckCircle size={24} className="text-green-600" />
            </div>
            <h3 className="font-bold text-azhar-dark text-sm mb-1">Genuine Parts</h3>
            <p className="text-xs text-gray-600">100% original components with quality guarantee</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-all transform hover:-translate-y-1 group">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <MdShield size={24} className="text-purple-600" />
            </div>
            <h3 className="font-bold text-azhar-dark text-sm mb-1">Warranty</h3>
            <p className="text-xs text-gray-600">6-month guarantee on all repairs and replacements</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 sm:mt-12">
          <div className="bg-gradient-to-br from-azhar-red/10 to-orange-100 border border-azhar-red/20 rounded-lg p-4 text-center hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-azhar-red mb-1">500+</div>
            <p className="text-xs text-gray-700 font-semibold">Happy Customers</p>
          </div>

          <div className="bg-gradient-to-br from-azhar-brown/10 to-amber-100 border border-azhar-brown/20 rounded-lg p-4 text-center hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-azhar-brown mb-1">1000+</div>
            <p className="text-xs text-gray-700 font-semibold">Devices Repaired</p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 rounded-lg p-4 text-center hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">10+</div>
            <p className="text-xs text-gray-700 font-semibold">Years Experience</p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 rounded-lg p-4 text-center hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">24/7</div>
            <p className="text-xs text-gray-700 font-semibold">Customer Support</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </main>
  )
}

export default SelectionWrapper
