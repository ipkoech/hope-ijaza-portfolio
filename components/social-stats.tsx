"use client"

import { useEffect, useState } from "react"
import { BarChart, LineChart, PieChart, Activity, TrendingUp, Users, Heart, MessageCircle, Share2 } from "lucide-react"

interface SocialStatsProps {
  className?: string
}

export function SocialStats({ className = "" }: SocialStatsProps) {
  const [activeTab, setActiveTab] = useState("engagement")
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateStats(true)
  }, [])

  return (
    <div className={`bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Social Media Performance</h3>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded-full text-sm ${activeTab === "engagement" ? "bg-primary text-white" : "bg-muted"}`}
            onClick={() => setActiveTab("engagement")}
          >
            Engagement
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${activeTab === "growth" ? "bg-primary text-white" : "bg-muted"}`}
            onClick={() => setActiveTab("growth")}
          >
            Growth
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${activeTab === "reach" ? "bg-primary text-white" : "bg-muted"}`}
            onClick={() => setActiveTab("reach")}
          >
            Reach
          </button>
        </div>
      </div>

      {activeTab === "engagement" && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{animateStats ? "24.5%" : "0%"}</div>
              <div className="text-xs text-muted-foreground">Engagement Rate</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{animateStats ? "1.2K" : "0"}</div>
              <div className="text-xs text-muted-foreground">Comments/Week</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <Share2 className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{animateStats ? "3.4K" : "0"}</div>
              <div className="text-xs text-muted-foreground">Shares/Month</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "growth" && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{animateStats ? "+15K" : "0"}</div>
              <div className="text-xs text-muted-foreground">New Followers</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{animateStats ? "+32%" : "0%"}</div>
              <div className="text-xs text-muted-foreground">Growth Rate</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{animateStats ? "89%" : "0%"}</div>
              <div className="text-xs text-muted-foreground">Retention</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "reach" && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{animateStats ? "245K" : "0"}</div>
              <div className="text-xs text-muted-foreground">Impressions</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{animateStats ? "120K" : "0"}</div>
              <div className="text-xs text-muted-foreground">Reach</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
              <PieChart className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{animateStats ? "18%" : "0%"}</div>
              <div className="text-xs text-muted-foreground">Click Rate</div>
            </div>
          </div>
        </div>
      )}

      <div className="h-40 relative overflow-hidden rounded-lg bg-muted/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">Interactive Analytics Dashboard</div>
            <button className="px-4 py-2 bg-primary text-white rounded-md text-sm">View Full Report</button>
          </div>
        </div>
      </div>
    </div>
  )
}

