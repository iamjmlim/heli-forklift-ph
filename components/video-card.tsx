'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getAssetPath } from '@/lib/paths'

interface VideoCardProps {
  thumbSrc: string
  videoId: string
  title: string
  desc: string
  viewMoreHref?: string
}

export function VideoCard({ thumbSrc, videoId, title, desc, viewMoreHref = '/products' }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div>
      {/* Thumbnail / embed */}
      <div className="relative aspect-video overflow-hidden bg-[#181c25] mb-4 cursor-pointer group/card">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        ) : (
          <>
            <Image
              src={getAssetPath(thumbSrc)}
              alt={title}
              fill
              className="object-cover opacity-70 group-hover/card:opacity-50 group-hover/card:scale-105 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Play button circle — like helichina.net's video sections */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => setPlaying(true)}
            >
              <div className="w-14 h-14 rounded-full border-2 border-white/60 group-hover/card:border-[#E60012] bg-black/30 group-hover/card:bg-[#E60012] flex items-center justify-center transition-all duration-300">
                <Play className="h-5 w-5 text-white fill-white ml-0.5" />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Title and desc */}
      <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-[#E60012] transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">{desc}</p>
      <Link
        href={viewMoreHref}
        className="inline-flex items-center gap-1 text-[#E60012] text-xs font-semibold hover:gap-2 transition-all duration-150"
      >
        View More <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  )
}
