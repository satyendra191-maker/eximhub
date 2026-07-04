import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'export-checklist'

export function useChecklist(itemCount: number) {
  const [checked, setChecked] = useState<boolean[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed) && parsed.length === itemCount) {
          return parsed
        }
      }
    } catch {
      // ignore parse errors
    }
    return new Array(itemCount).fill(false)
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
    } catch {
      // ignore storage errors
    }
  }, [checked])

  const toggle = useCallback((index: number) => {
    setChecked((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }, [])

  const reset = useCallback(() => {
    setChecked(new Array(itemCount).fill(false))
  }, [itemCount])

  const completedCount = checked.filter(Boolean).length
  const progress = itemCount > 0 ? Math.round((completedCount / itemCount) * 100) : 0
  const allDone = completedCount === itemCount

  return { checked, toggle, reset, completedCount, progress, allDone }
}
