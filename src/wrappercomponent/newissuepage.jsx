"use client"

import { useState, useMemo } from "react"
import axios from "axios"
import { IoClose } from 'react-icons/io5'
import { MdSend, MdCheckCircle, MdError, MdSearch } from 'react-icons/md'
import { BiLoader } from 'react-icons/bi'
import { FiCopy } from 'react-icons/fi'

const apiUrl = "https://mozbackend.bellaryinfotech.com/api/issues"

const NewEntryIssue = ({ onShowToast }) => {
  const [showModal, setShowModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [trackingId, setTrackingId] = useState("")
  const [customIssueVisible, setCustomIssueVisible] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [brandSearch, setBrandSearch] = useState("")
  const [modelSearch, setModelSearch] = useState("")
  const [showBrandDropdown, setShowBrandDropdown] = useState(false)
  const [showModelDropdown, setShowModelDropdown] = useState(false)
  const [useCustomBrand, setUseCustomBrand] = useState(false)
  const [useCustomModel, setUseCustomModel] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    mobileBrand: "",
    mobileModel: "",
    issueType: "",
    customIssue: "",
  })

  const mobileBrands = {
    Apple: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 15 Plus", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14", "iPhone 14 Plus", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 mini", "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 mini", "iPhone SE 3", "iPhone SE 2"],
    Samsung: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy Z Fold 5", "Galaxy Z Flip 5", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy A54", "Galaxy A53", "Galaxy M53", "Galaxy M33", "Galaxy Note 20", "Galaxy S21", "Galaxy A72", "Galaxy A52", "Galaxy A32"],
    Xiaomi: ["Poco X5 Pro", "Poco X5", "Redmi Note 12 Pro+", "Redmi Note 12 Pro", "Redmi Note 12", "Redmi 12C", "Mi 13", "Mi 12T Pro", "Mi 12", "Mi 11", "Poco F3", "Poco X3 Pro", "Redmi K50", "Redmi K40"],
    OnePlus: ["OnePlus 11", "OnePlus 12", "OnePlus 10 Pro", "OnePlus 10", "OnePlus 9 Pro", "OnePlus 9", "OnePlus 8 Pro", "OnePlus 8", "OnePlus 7 Pro", "OnePlus Nord 2", "OnePlus Nord", "OnePlus 10T"],
    Vivo: ["Vivo X90 Pro", "Vivo X90", "Vivo V27 Pro", "Vivo V27", "Vivo V25 Pro", "Vivo V25", "Vivo Y36", "Vivo Y35", "Vivo Y16", "Vivo S15 Pro", "Vivo S15", "Vivo X70 Pro"],
    Oppo: ["Oppo Find X6 Pro", "Oppo Find X6", "Oppo Find N2", "Oppo Reno 8 Pro", "Oppo Reno 8", "Oppo Reno 7 Pro", "Oppo Reno 7", "Oppo A77", "Oppo A76", "Oppo A57", "Oppo A16", "Oppo F21 Pro"],
    Realme: ["Realme GT3", "Realme GT2 Pro", "Realme 10 Pro", "Realme 10", "Realme 9 Pro+", "Realme 9 Pro", "Realme 9", "Realme 8 Pro", "Realme 8", "Realme 7 Pro", "Realme 7", "Realme 6 Pro"],
    Motorola: ["Moto Edge 40", "Moto Edge 30", "Moto G73", "Moto G72", "Moto G53", "Moto G52", "Moto G32", "Moto E32", "Moto X30", "Moto Edge Plus", "Moto G71", "Moto G61"],
    Google: ["Pixel 8 Pro", "Pixel 8", "Pixel 7a", "Pixel 7 Pro", "Pixel 7", "Pixel 6 Pro", "Pixel 6", "Pixel 6a", "Pixel 5a", "Pixel 4a XL", "Pixel 4a", "Pixel 4"],
    Huawei: ["Huawei P60 Pro", "Huawei Mate 50 Pro", "Huawei Mate 50", "Huawei Nova 10 Pro", "Huawei Nova 10", "Huawei P50 Pro", "Huawei P50", "Huawei Mate 40 Pro", "Huawei Mate 40", "Huawei P40 Pro"],
    Nokia: ["Nokia G60", "Nokia G50", "Nokia X30", "Nokia X20", "Nokia G100", "Nokia 3.4", "Nokia 2.4", "Nokia 6.3", "Nokia 8.3"],
    Asus: ["Asus ROG Phone 7 Pro", "Asus ROG Phone 7", "Asus ROG Phone 6D", "Asus ROG Phone 6", "Asus Zenfone 10", "Asus Zenfone 9"],
    Nothing: ["Nothing Phone 2", "Nothing Phone 1"],
    Blackberry: ["BlackBerry KEY2", "BlackBerry KEYone", "BlackBerry PRIV", "BlackBerry Passport"],
    Sony: ["Sony Xperia 1 IV", "Sony Xperia 5 IV", "Sony Xperia 10 IV", "Sony Xperia 1 III", "Sony Xperia 5 III"],
    LG: ["LG V60 ThinQ", "LG G8 ThinQ", "LG V50 ThinQ", "LG G7 ThinQ"],
  }

  const issueTypes = [
    "Screen Issue", "Battery Issue", "Charging Issue", "Speaker Issue", "Camera Issue",
    "Software Issue", "Hardware Damage", "Overheating", "Water Damage", "Microphone Issue",
    "Power Button Issue", "Volume Button Issue", "Screen Replacement", "Battery Replacement", "Motherboard Issue"
  ]

  const filteredBrands = useMemo(() => {
    return Object.keys(mobileBrands).filter(brand =>
      brand.toLowerCase().includes(brandSearch.toLowerCase())
    )
  }, [brandSearch])

  const filteredModels = useMemo(() => {
    if (!formData.mobileBrand || useCustomBrand) return []
    return mobileBrands[formData.mobileBrand].filter(model =>
      model.toLowerCase().includes(modelSearch.toLowerCase())
    )
  }, [formData.mobileBrand, modelSearch, useCustomBrand])

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name required"
    if (!formData.phone.trim()) newErrors.phone = "Phone required"
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "10 digits required"
    if (formData.email.trim() && !formData.email.endsWith("@gmail.com")) newErrors.email = "Must be @gmail.com"
    if (!formData.address.trim()) newErrors.address = "Address required"
    if (!formData.mobileBrand) newErrors.mobileBrand = "Brand required"
    if (!formData.mobileModel) newErrors.mobileModel = "Model required"
    if (!formData.issueType) newErrors.issueType = "Issue type required"
    return newErrors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }))
  }

  const simulateProgress = async () => {
    for (let i = 0; i <= 100; i += 20) {
      setProgress(i)
      await new Promise(resolve => setTimeout(resolve, 300))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      onShowToast("Please fix all errors", "error")
      return
    }

    setLoading(true)
    await simulateProgress()

    try {
      const response = await axios.post(apiUrl, formData)
      setTrackingId(response.data.trackingId)
      setShowModal(false)
      setShowSuccessModal(true)
      onShowToast("✅ Issue registered & Tracking ID sent via WhatsApp", "success")
    } catch (error) {
      onShowToast("Error submitting issue", "error")
    } finally {
      setLoading(false)
      setProgress(0)
    }
  }

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-azhar-brown to-azhar-red text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base"
      >
        + Create Issue
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-azhar-dark to-azhar-brown text-white p-3 sm:p-4 flex items-center justify-between border-b border-gray-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Create Repair Issue</h2>
                <p className="text-[10px] sm:text-xs text-gray-200 mt-0.5">Fast & Reliable Mobile Repair</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-all"
              >
                <IoClose size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-3 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Row 1: Name */}
                <div>
                  <label className="block text-xs font-bold text-azhar-dark mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-all text-xs ${
                      errors.name ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-azhar-red"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-[10px] mt-0.5">{errors.name}</p>}
                </div>

                {/* Row 2: Email (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-azhar-dark mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@gmail.com"
                    className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-all text-xs ${
                      errors.email ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-azhar-red"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-0.5">{errors.email}</p>}
                </div>

                {/* Row 3: Phone */}
                <div>
                  <label className="block text-xs font-bold text-azhar-dark mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    maxLength="10"
                    className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-all text-xs ${
                      errors.phone ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-azhar-red"
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] mt-0.5">{errors.phone}</p>}
                  <p className="text-[10px] text-green-600 font-semibold mt-1">✓ Tracking ID will be sent here via WhatsApp</p>
                </div>

                {/* Row 4: Address */}
                <div>
                  <label className="block text-xs font-bold text-azhar-dark mb-1">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Pickup location"
                    className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-all text-xs ${
                      errors.address ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-azhar-red"
                    }`}
                  />
                  {errors.address && <p className="text-red-500 text-[10px] mt-0.5">{errors.address}</p>}
                </div>

                {/* Row 5: Mobile Brand */}
                <div>
                  <label className="block text-xs font-bold text-azhar-dark mb-1">
                    Mobile Brand * 
                    <button
                      type="button"
                      onClick={() => { setUseCustomBrand(!useCustomBrand); setFormData(prev => ({ ...prev, mobileBrand: "" })) }}
                      className="ml-2 text-[10px] text-azhar-red font-semibold hover:underline"
                    >
                      {useCustomBrand ? "Select from list" : "Enter custom"}
                    </button>
                  </label>
                  
                  {useCustomBrand ? (
                    <input
                      type="text"
                      name="mobileBrand"
                      value={formData.mobileBrand}
                      onChange={handleInputChange}
                      placeholder="E.g., Nokia, Nothing, Vivo..."
                      className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-all text-xs ${
                        errors.mobileBrand ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-azhar-red"
                      }`}
                    />
                  ) : (
                    <div className="relative">
                      <input
                        type="text"
                        value={brandSearch}
                        onChange={(e) => { setBrandSearch(e.target.value); setShowBrandDropdown(true) }}
                        onFocus={() => setShowBrandDropdown(true)}
                        placeholder="Search or select brand"
                        className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-all text-xs ${
                          errors.mobileBrand ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-azhar-red"
                        }`}
                      />
                      {showBrandDropdown && (
                        <div className="absolute top-full left-0 right-0 bg-white border-2 border-gray-300 rounded-lg mt-1 max-h-48 overflow-y-auto z-10">
                          {filteredBrands.length > 0 ? (
                            filteredBrands.map(brand => (
                              <button
                                key={brand}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, mobileBrand: brand, mobileModel: "" }))
                                  setBrandSearch(brand)
                                  setShowBrandDropdown(false)
                                  setModelSearch("")
                                  if (errors.mobileBrand) setErrors(prev => ({ ...prev, mobileBrand: "" }))
                                }}
                                className="w-full text-left px-3 py-2 hover:bg-azhar-red/10 text-xs font-semibold text-azhar-dark transition-all"
                              >
                                {brand}
                              </button>
                            ))
                          ) : (
                            <p className="px-3 py-2 text-xs text-gray-500">No brands found</p>
                          )}
                        </div>
                      )}
                      {formData.mobileBrand && (
                        <div className="absolute right-3 top-2.5 bg-green-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                          ✓ {formData.mobileBrand}
                        </div>
                      )}
                    </div>
                  )}
                  {errors.mobileBrand && <p className="text-red-500 text-[10px] mt-0.5">{errors.mobileBrand}</p>}
                </div>

                {/* Row 6: Mobile Model */}
                {formData.mobileBrand && (
                  <div>
                    <label className="block text-xs font-bold text-azhar-dark mb-1">
                      Mobile Model *
                      <button
                        type="button"
                        onClick={() => { setUseCustomModel(!useCustomModel); setFormData(prev => ({ ...prev, mobileModel: "" })) }}
                        className="ml-2 text-[10px] text-azhar-red font-semibold hover:underline"
                      >
                        {useCustomModel ? "Select from list" : "Enter custom"}
                      </button>
                    </label>

                    {useCustomModel ? (
                      <input
                        type="text"
                        name="mobileModel"
                        value={formData.mobileModel}
                        onChange={handleInputChange}
                        placeholder="E.g., Galaxy S24, iPhone 15 Pro..."
                        className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-all text-xs ${
                          errors.mobileModel ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-azhar-red"
                        }`}
                      />
                    ) : (
                      <div className="relative">
                        <input
                          type="text"
                          value={modelSearch}
                          onChange={(e) => { setModelSearch(e.target.value); setShowModelDropdown(true) }}
                          onFocus={() => setShowModelDropdown(true)}
                          placeholder="Search or select model"
                          className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-all text-xs ${
                            errors.mobileModel ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-azhar-red"
                          }`}
                        />
                        {showModelDropdown && (
                          <div className="absolute top-full left-0 right-0 bg-white border-2 border-gray-300 rounded-lg mt-1 max-h-48 overflow-y-auto z-10">
                            {filteredModels.length > 0 ? (
                              filteredModels.map(model => (
                                <button
                                  key={model}
                                  type="button"
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, mobileModel: model }))
                                    setModelSearch("")
                                    setShowModelDropdown(false)
                                    if (errors.mobileModel) setErrors(prev => ({ ...prev, mobileModel: "" }))
                                  }}
                                  className="w-full text-left px-3 py-2 hover:bg-azhar-red/10 text-xs font-semibold text-azhar-dark transition-all"
                                >
                                  {model}
                                </button>
                              ))
                            ) : (
                              <p className="px-3 py-2 text-xs text-gray-500">No models found</p>
                            )}
                          </div>
                        )}
                        {formData.mobileModel && (
                          <div className="absolute right-3 top-2.5 bg-green-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                            ✓ {formData.mobileModel.substring(0, 15)}...
                          </div>
                        )}
                      </div>
                    )}
                    {errors.mobileModel && <p className="text-red-500 text-[10px] mt-0.5">{errors.mobileModel}</p>}
                  </div>
                )}

                {/* Row 7: Issue Type */}
                <div>
                  <label className="block text-xs font-bold text-azhar-dark mb-1">Issue Type *</label>
                  <select
                    name="issueType"
                    value={formData.issueType}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-all text-xs ${
                      errors.issueType ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-azhar-red"
                    }`}
                  >
                    <option value="">Select Issue Type</option>
                    {issueTypes.map(issue => (
                      <option key={issue} value={issue}>{issue}</option>
                    ))}
                  </select>
                  {errors.issueType && <p className="text-red-500 text-[10px] mt-0.5">{errors.issueType}</p>}
                </div>
              </div>

              {/* Custom Issue */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customIssueVisible}
                  onChange={(e) => setCustomIssueVisible(e.target.checked)}
                  className="w-3 h-3 accent-azhar-red"
                />
                <span className="text-xs text-azhar-dark font-semibold">Add custom issue details</span>
              </label>

              {customIssueVisible && (
                <div>
                  <textarea
                    name="customIssue"
                    value={formData.customIssue}
                    onChange={handleInputChange}
                    placeholder="Max 300 characters"
                    maxLength="300"
                    rows="2"
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-azhar-red focus:outline-none resize-none text-xs"
                  ></textarea>
                  <p className="text-[10px] text-gray-500 mt-0.5">{formData.customIssue.length}/300</p>
                </div>
              )}

              {/* Progress Bar */}
              {loading && (
                <div className="space-y-1">
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-azhar-red to-orange-500 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-center text-gray-600">Processing... {progress}%</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-gradient-to-r from-azhar-red to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all transform active:scale-95 disabled:opacity-50 text-xs sm:text-sm flex items-center justify-center gap-1.5"
              >
                {loading ? (
                  <>
                    <BiLoader size={16} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <MdSend size={16} />
                    Submit Issue
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccessModal(false)}
              className="float-right p-1 hover:bg-gray-100 rounded-lg transition-all"
            >
              <IoClose size={18} />
            </button>

            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <MdCheckCircle size={36} className="text-green-600" />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-azhar-dark mb-1">Success!</h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">Your issue has been registered</p>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-4 mb-4">
              <p className="text-[10px] text-gray-600 font-semibold mb-2">✓ Tracking ID Sent via WhatsApp</p>
              <p className="text-lg sm:text-xl font-bold text-azhar-dark mb-3 font-mono">{trackingId}</p>
              <p className="text-[10px] text-green-700 font-semibold mb-3">
                🟢 Tracking ID has been sent to your WhatsApp number
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(trackingId)
                  onShowToast("Tracking ID Copied!", "success")
                }}
                className="w-full px-3 py-1.5 bg-azhar-red text-white font-bold rounded-lg hover:bg-azhar-dark transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5"
              >
                <FiCopy size={14} />
                Copy ID
              </button>
            </div>

            <p className="text-xs text-gray-600 mb-4">Our team will contact you within 2 hours via WhatsApp or Phone</p>

            <button
              onClick={() => {
                setShowSuccessModal(false)
                setFormData({ name: "", email: "", phone: "", address: "", mobileBrand: "", mobileModel: "", issueType: "", customIssue: "" })
                setErrors({})
                setBrandSearch("")
                setModelSearch("")
                setUseCustomBrand(false)
                setUseCustomModel(false)
              }}
              className="w-full px-3 py-2 bg-azhar-red text-white font-bold rounded-lg hover:bg-azhar-dark transition-all text-xs sm:text-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewEntryIssue