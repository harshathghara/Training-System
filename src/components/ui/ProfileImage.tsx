'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'

interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  showUpload?: boolean
}

const ProfileImage: React.FC<ProfileImageProps> = ({ 
  size = 'md', 
  className = '', 
  onClick,
  showUpload = false 
}) => {
  const { user, profileImage, setProfileImage } = useAuth()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageClick = () => {
    if (showUpload) {
      fileInputRef.current?.click()
    }
    onClick?.()
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20'
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-8 h-8'
  }

  return (
    <>
      {profileImage ? (
        <Image
          src={profileImage}
          alt={`${user?.first_name || 'User'} ${user?.last_name || ''}`}
          width={size === 'sm' ? 32 : size === 'md' ? 40 : 80}
          height={size === 'sm' ? 32 : size === 'md' ? 40 : 80}
          className={`rounded-full object-cover cursor-pointer ${sizeClasses[size]} ${className}`}
          onClick={handleImageClick}
        />
      ) : (
        <div 
          className={`${sizeClasses[size]} bg-white border-2 border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:border-gray-400 ${className}`}
          onClick={handleImageClick}
        >
          <svg className={`${iconSizes[size]} text-gray-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )}
      {showUpload && (
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
      )}
    </>
  )
}

export default ProfileImage 