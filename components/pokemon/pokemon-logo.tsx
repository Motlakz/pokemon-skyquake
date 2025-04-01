"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

type Ball = {
  angle: number
  radius: number
  centerX: number
  centerY: number
  size: number
  rotationSpeed: number
  type: 'luxury' | 'ultra' | 'great' | 'master'
}

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function PokemonLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isDark = false

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Increase canvas size
    canvas.width = 800
    canvas.height = 300

    let particles: Particle[] = []
    let pokeballs: Ball[] = []

    const createParticles = () => {
      particles = []
      for (let i = 0; i < 40; i++) {
        const isAccent = Math.random() > 0.7
        let color
        if (isAccent) {
          color = `hsla(24, ${90 + Math.random() * 10}%, ${50 + Math.random() * 20}%, 0.6)`
        } else {
          color = Math.random() > 0.5
            ? `hsla(226, ${70 + Math.random() * 30}%, ${isDark ? 70 : 50 + Math.random() * 20}%, 0.4)`
            : `hsla(186, ${90 + Math.random() * 10}%, ${isDark ? 70 : 50 + Math.random() * 20}%, 0.4)`
        }

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 6 + 2, // Larger particles
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2,
          color,
        })
      }
    }

    const createPokeballs = () => {
      pokeballs = []
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = 160 // Larger orbit radius
      
      const ballTypes: Array<'luxury' | 'ultra' | 'great' | 'master'> = 
        ['luxury', 'ultra', 'great', 'master']
      
      for (let i = 0; i < 4; i++) {
        pokeballs.push({
          angle: (i * Math.PI * 2) / 4,
          radius: radius,
          centerX: centerX,
          centerY: centerY,
          size: 28, // Larger balls
          rotationSpeed: 0.002, // Slightly slower rotation
          type: ballTypes[i]
        })
      }
    }

    const addMetallicEffect = (x: number, y: number, size: number, color: string) => {
      const gradient = ctx.createRadialGradient(
        x - size/3, y - size/3, size/10,
        x, y, size
      )
      gradient.addColorStop(0, '#ffffff')
      gradient.addColorStop(0.2, color)
      gradient.addColorStop(0.8, color)
      gradient.addColorStop(1, '#000000')
      return gradient
    }

    const drawPokeball = (x: number, y: number, size: number, type: 'luxury' | 'ultra' | 'great' | 'master') => {
      ctx.save()
      
      // Add shadow for depth
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
      ctx.shadowBlur = 15
      ctx.shadowOffsetX = 5
      ctx.shadowOffsetY = 5

      // Main ball
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      
      let topColor
      switch(type) {
        case 'luxury':
          topColor = addMetallicEffect(x, y, size, '#111')
          break
        case 'great':
          topColor = addMetallicEffect(x, y, size, '#295BE8')
          break
        case 'ultra':
          topColor = addMetallicEffect(x, y, size, '#FCC101')
          break
        case 'master':
          topColor = addMetallicEffect(x, y, size, '#7B2682')
          break
      }
      
      ctx.fillStyle = topColor
      ctx.fill()
      ctx.strokeStyle = '#000'
      ctx.lineWidth = 2
      ctx.stroke()

      // Bottom half
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI)
      const bottomColor = type === 'luxury' 
        ? addMetallicEffect(x, y + size/2, size, '#111')
        : addMetallicEffect(x, y + size/2, size, '#fff')
      ctx.fillStyle = bottomColor
      ctx.fill()
      ctx.strokeStyle = '#000'
      ctx.stroke()

      // Middle line with shine effect
      ctx.beginPath()
      ctx.moveTo(x - size, y)
      ctx.lineTo(x + size, y)
      ctx.strokeStyle = type === 'luxury' ? '#FFD700' : '#000'
      ctx.lineWidth = 3
      ctx.stroke()

      // Center circle with metallic effect
      ctx.beginPath()
      ctx.arc(x, y, size / 3, 0, Math.PI * 2)
      const centerColor = type === 'luxury' 
        ? addMetallicEffect(x, y, size/3, '#FFD700')
        : addMetallicEffect(x, y, size/3, '#fff')
      ctx.fillStyle = centerColor
      ctx.fill()
      ctx.strokeStyle = '#000'
      ctx.stroke()

      // Inner circle
      ctx.beginPath()
      ctx.arc(x, y, size / 5, 0, Math.PI * 2)
      ctx.fillStyle = addMetallicEffect(x, y, size/5, '#000')
      ctx.fill()

      // Remove shadow for details
      ctx.shadowColor = 'transparent'

      // Ball-specific details
      switch(type) {
        case 'luxury':
          ctx.beginPath()
          for(let i = 0; i < 4; i++) {
            const angle = (i * Math.PI / 2) + Math.PI / 4
            ctx.moveTo(x + Math.cos(angle) * size * 0.5, y + Math.sin(angle) * size * 0.5)
            ctx.lineTo(x + Math.cos(angle) * size * 0.8, y + Math.sin(angle) * size * 0.8)
          }
          ctx.strokeStyle = '#FFD700'
          ctx.lineWidth = 3
          ctx.stroke()
          break

        case 'ultra':
          ctx.beginPath()
          ctx.arc(x, y - size/2, size/4, 0, Math.PI * 2)
          ctx.strokeStyle = '#000'
          ctx.lineWidth = 4
          ctx.stroke()
          
          // Add 'U' detail
          ctx.beginPath()
          ctx.arc(x, y - size/2, size/6, Math.PI, Math.PI * 2)
          ctx.strokeStyle = '#000'
          ctx.lineWidth = 3
          ctx.stroke()
          break

        case 'master':
          // M symbol
          ctx.beginPath()
          ctx.moveTo(x - size/3, y - size/2)
          ctx.lineTo(x, y - size/3)
          ctx.lineTo(x + size/3, y - size/2)
          ctx.strokeStyle = '#FF69B4'
          ctx.lineWidth = 3
          ctx.stroke()
          
          // Pink accents
          ctx.beginPath()
          ctx.arc(x, y - size/1.5, size/6, 0, Math.PI * 2)
          ctx.fillStyle = addMetallicEffect(x, y - size/1.5, size/6, '#FF69B4')
          ctx.fill()
          break

        case 'great':
          // Red accents
          ctx.beginPath()
          ctx.moveTo(x - size/2, y - size/2)
          ctx.lineTo(x + size/2, y - size/2)
          ctx.strokeStyle = '#FF0000'
          ctx.lineWidth = 4
          ctx.stroke()
          
          // Black triangular detail
          ctx.beginPath()
          ctx.moveTo(x - size/3, y - size/2)
          ctx.lineTo(x + size/3, y - size/2)
          ctx.lineTo(x, y - size/1.2)
          ctx.closePath()
          ctx.fillStyle = '#000'
          ctx.fill()
          break
      }

      ctx.restore()
    }

    const drawLogoText = () => {
      ctx.save();
    
      const shadowDepth = 4;
      
      const pokemonY = canvas.height / 2 - 35;
      const skyquakeY = canvas.height / 2 + 35;
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      
      if (isDark) {
        gradient.addColorStop(0, "#6366f1");
        gradient.addColorStop(0.3, "#06b6d4");
        gradient.addColorStop(0.6, "#f97316");
        gradient.addColorStop(1, "#6366f1");
        
        ctx.shadowColor = "rgba(99, 102, 241, 0.6)";  // Light indigo glow
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      } else {
        gradient.addColorStop(0, "#4f46e5");
        gradient.addColorStop(0.3, "#0891b2");
        gradient.addColorStop(0.6, "#ea580c");
        gradient.addColorStop(1, "#4f46e5");
      }
      
      // 3D shadow effect for "Pokémon"
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 100px 'Arial', sans-serif";
      
      // Create layered shadows for 3D effect
      for (let i = shadowDepth; i > 0; i--) {
        ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.5)";
        ctx.fillText("Pokémon", canvas.width / 2 + i, pokemonY + i);
      }
      
      // Main text fill with original gradient
      ctx.fillStyle = gradient;
      ctx.fillText("Pokémon", canvas.width / 2, pokemonY);
      
      // Add shine effect to "Pokémon"
      const shineGradient = ctx.createLinearGradient(
        0, 
        pokemonY - 40, 
        0, 
        pokemonY
      );
      
      shineGradient.addColorStop(0, "rgba(255, 255, 255, 0.7)");
      shineGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.save();
      ctx.fillStyle = shineGradient;
      ctx.fillText("Pokémon", canvas.width / 2, pokemonY);
      ctx.restore();
      
      // Original stroke
      ctx.strokeStyle = isDark ? "#000" : "#111827";
      ctx.lineWidth = 1;
      ctx.strokeText("Pokémon", canvas.width / 2, pokemonY);
      
      // 3D shadow effect for "SKYQUAKE"
      ctx.font = "bold 50px 'monospace', sans-serif";
      
      // Create layered shadows for 3D effect
      for (let i = shadowDepth/2; i > 0; i--) {
        ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.5)";
        ctx.fillText("SKYQUAKE", canvas.width / 2 + i, skyquakeY + i);
      }
      
      // Main text fill with original gradient
      ctx.fillStyle = gradient;
      ctx.fillText("SKYQUAKE", canvas.width / 2, skyquakeY);
      
      // Add shine effect to "SKYQUAKE"
      const skyquakeShine = ctx.createLinearGradient(
        0, 
        skyquakeY - 20, 
        0, 
        skyquakeY
      );
      
      skyquakeShine.addColorStop(0, "rgba(255, 255, 255, 0.7)");
      skyquakeShine.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.save();
      ctx.fillStyle = skyquakeShine;
      ctx.fillText("SKYQUAKE", canvas.width / 2, skyquakeY);
      ctx.restore();
      
      // Original stroke
      ctx.strokeText("SKYQUAKE", canvas.width / 2, skyquakeY);
      
      ctx.restore();
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })

      pokeballs.forEach(p => {
        p.angle += p.rotationSpeed
        const x = p.centerX + Math.cos(p.angle) * p.radius
        const y = p.centerY + Math.sin(p.angle) * p.radius
        drawPokeball(x, y, p.size, p.type)
      })

      drawLogoText()

      requestAnimationFrame(animate)
    }

    createParticles()
    createPokeballs()
    animate()

    return () => {
      particles = []
      pokeballs = []
    }
  }, [isDark])

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mb-8" // Increased max-width
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-auto" 
        style={{ maxHeight: "300px" }} // Increased height
      />
    </motion.div>
  )
}
