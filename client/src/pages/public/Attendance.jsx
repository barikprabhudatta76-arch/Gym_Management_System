import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  QrCode, 
  Camera, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Dumbbell,
  ChevronLeft,
  ChevronRight,
  MoreVertical
} from "lucide-react";

const GymAttendance = () => {
  const [selectedDate, setSelectedDate] = useState("2026-02-12");
  const [activeTab, setActiveTab] = useState("checkin");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for recent check-ins
  const recentCheckins = [
    { id: 1, name: "John Smith", memberId: "M-10234", time: "08:30 AM", status: "checked-in", plan: "Premium", avatar: "JS" },
    { id: 2, name: "Sarah Johnson", memberId: "M-10245", time: "08:45 AM", status: "checked-in", plan: "Basic", avatar: "SJ" },
    { id: 3, name: "Mike Chen", memberId: "M-10212", time: "09:00 AM", status: "checked-in", plan: "Student", avatar: "MC" },
    { id: 4, name: "Emma Davis", memberId: "M-10278", time: "09:15 AM", status: "checked-in", plan: "Premium", avatar: "ED" },
    { id: 5, name: "Alex Turner", memberId: "M-10198", time: "09:30 AM", status: "checked-in", plan: "Family", avatar: "AT" },
  ];

  // Mock data for expected check-ins today
  const expectedCheckins = [
    { id: 6, name: "Lisa Wong", memberId: "M-10301", expectedTime: "10:00 AM", status: "expected", plan: "Premium", avatar: "LW" },
    { id: 7, name: "David Kim", memberId: "M-10256", expectedTime: "10:30 AM", status: "expected", plan: "Basic", avatar: "DK" },
    { id: 8, name: "Rachel Green", memberId: "M-10322", expectedTime: "11:00 AM", status: "expected", plan: "Student", avatar: "RG" },
  ];

  // Mock data for absent members
  const absentMembers = [
    { id: 9, name: "Tom Wilson", memberId: "M-10145", status: "absent", plan: "Premium", avatar: "TW" },
    { id: 10, name: "Anna Lee", memberId: "M-10289", status: "absent", plan: "Family", avatar: "AL" },
  ];

  const renderStatusBadge = (status) => {
    switch(status) {
      case 'checked-in':
        return <span className="flex items-center text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"><CheckCircle className="w-3 h-3 mr-1" /> Checked In</span>;
      case 'expected':
        return <span className="flex items-center text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"><Clock className="w-3 h-3 mr-1" /> Expected</span>;
      case 'absent':
        return <span className="flex items-center text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full"><XCircle className="w-3 h-3 mr-1" /> Absent</span>;
      default:
        return null;
    }
  };

  const statsCards = [
    { title: "Today's Check-ins", value: "156", change: "+12", icon: CheckCircle, color: "green" },
    { title: "Active Members", value: "432", change: "+8", icon: Dumbbell, color: "yellow" },
    { title: "Expected Today", value: "187", change: "-3", icon: Clock, color: "blue" },
    { title: "Absent Today", value: "31", change: "+5", icon: XCircle, color: "red" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
            <p className="text-gray-600 mt-1">Track member check-ins and attendance history</p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-200 flex items-center justify-center">
              <QrCode className="w-5 h-5 mr-2" />
              Quick Check-in
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-xs mt-1 ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from yesterday
                  </p>
                </div>
                <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Check-in Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <Camera className="w-8 h-8 text-yellow-500" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Quick Check-in</h2>
                <p className="text-sm text-gray-600">Scan member QR code or search by name/ID</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search member name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent w-full sm:w-64"
                />
              </div>
              <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-200 flex items-center justify-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Attendance Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap">
              {[
                { id: "checkin", label: "Recent Check-ins", count: 5 },
                { id: "expected", label: "Expected Today", count: 3 },
                { id: "absent", label: "Absent", count: 2 },
                { id: "history", label: "Full History" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium border-b-2 transition duration-200 ${
                    activeTab === tab.id
                      ? "border-yellow-500 text-yellow-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                  {tab.count && (
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      activeTab === tab.id
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Recent Check-ins Tab */}
            {activeTab === "checkin" && (
              <div className="space-y-4">
                {recentCheckins.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.memberId} • {member.plan} Plan</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{member.time}</p>
                        {renderStatusBadge(member.status)}
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Expected Today Tab */}
            {activeTab === "expected" && (
              <div className="space-y-4">
                {expectedCheckins.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.memberId} • {member.plan} Plan</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">Expected: {member.expectedTime}</p>
                        {renderStatusBadge(member.status)}
                      </div>
                      <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 transition duration-200">
                        Check-in
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Absent Tab */}
            {activeTab === "absent" && (
              <div className="space-y-4">
                {absentMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.memberId} • {member.plan} Plan</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {renderStatusBadge(member.status)}
                      <button className="text-yellow-600 hover:text-yellow-800 text-sm font-semibold">
                        Mark as Excused
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Full History Tab */}
            {activeTab === "history" && (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Full Attendance History</h3>
                <p className="text-gray-500">View complete attendance records and generate reports</p>
                <button className="mt-6 bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-200">
                  View All History
                </button>
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">Showing 1-5 of 156 check-ins</p>
              <div className="flex items-center space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition duration-200">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                  3
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymAttendance;