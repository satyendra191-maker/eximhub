'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const botResponses: Record<string, string> = {
  iec: 'IEC (Importer Exporter Code) is a 10-digit unique code issued by DGFT. It is mandatory for all exporters. You can apply online at dgft.gov.in with your PAN, Aadhaar, and bank details. The fee is approximately Rs. 500.',
  'hs code': 'HS Code (Harmonized System Code) is a 6-10 digit standard classification for goods. Use the Indian Trade Portal (indiantradeportal.in) to search HS codes. The first 6 digits are globally standardized.',
  hsn: 'HSN (Harmonized System of Nomenclature) codes are the same as HS codes. In India, they are 8-digit codes used for GST and customs classification.',
  wheat: 'For wheat export, you need APEDA registration, FSSAI clearance, and export permit from DGFT. Check the export policy on the Indian Trade Portal as wheat may be subject to export restrictions.',
  flour: 'Wheat/atta flour exports require APEDA registration, FSSAI license, and compliance with destination country food safety standards.',
  rice: 'Rice exports (Basmati/non-Basmati) require APEDA registration, FSSAI clearance, and compliance with destination country norms. Certain varieties may have minimum export prices (MEP).',
  food: 'Food exports require: 1) APEDA registration 2) FSSAI license 3) Health/sanitary certificate 4) Destination country-specific certifications like FDA (USA), UK health certificate, etc.',
  tariff: 'Check customs tariffs and duties on the Indian Trade Portal. You can search by HS code to find applicable duty rates, including preferential rates under FTAs.',
  customs: 'For customs clearance, file shipping bills through ICEGATE (icegate.gov.in). You will need: commercial invoice, packing list, bill of lading, and export declaration.',
  'shipping bill': 'A Shipping Bill is the key document for customs clearance. File it online through ICEGATE. It contains details about the exporter, goods, destination, and value.',
  buyer: 'To find international buyers: 1) Register on FIEO for buyer-seller meets 2) Join trade delegations 3) Use export promotion councils 4) Attend international trade fairs 5) Use B2B platforms.',
  'find buyers': 'FIEO organizes regular buyer-seller meets and trade delegations. Join as a member and participate in sector-specific events to connect with international buyers.',
  'export benefit': 'India offers: 1) RoDTEP (duty remission) 2) Duty Drawback 3) Interest Equalisation Scheme 4) MAI (Market Access Initiative) 5) Transport & Marketing Assistance (TMA) for agri products.',
  rodtep: 'RoDTEP (Remission of Duties and Taxes on Exported Products) replaced MEIS. It provides credits/scrips for various embedded duties. Claim it through the ICEGATE/DGFT portal.',
  scheme: 'Export promotion schemes include: RoDTEP, Duty Drawback, Advance Authorization, EPCG, AA, DFIA, and Interest Equalisation. Check eligibility on DGFT portal.',
  invest: 'Invest India helps with investment guidance, startup registration, and export incentive information. Visit investindia.gov.in for detailed sector-specific guidance.',
  investment: 'For investment in export infrastructure, contact Invest India (investindia.gov.in). They provide guidance on SEZs, manufacturing hubs, and government incentive schemes.',
}

const defaultResponses = [
  'Namaste! I\'m your Export AI Assistant. Ask me about IEC, HS Codes, schemes, or any export query.',
  'I can help you with export documentation, government portals, compliance requirements, and more. What would you like to know?',
  'For specific queries about your product, please provide the HS code or product name for detailed guidance.',
]

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: 'Namaste! I\'m your Export AI Assistant. Ask me about IEC, HS Codes, schemes, or any export query.',
      sender: 'bot',
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    const text = input.trim()
    if (!text) return

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, sender: 'user' },
    ])
    setInput('')

    setTimeout(() => {
      const lower = text.toLowerCase()
      let response = ''

      for (const [keyword, answer] of Object.entries(botResponses)) {
        if (lower.includes(keyword)) {
          response = answer
          break
        }
      }

      if (!response) {
        const idx = Math.floor(Math.random() * defaultResponses.length)
        response = defaultResponses[idx] ?? 'Ask me about IEC, HS Codes, schemes, or any export query.'
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), text: response, sender: 'bot' },
      ])
    }, 600)
  }

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg shadow-primary/25"
        size="icon"
        aria-label="Toggle AI Chat Assistant"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-20 right-6 z-50 flex w-[350px] flex-col rounded-xl border bg-card shadow-floating sm:w-[400px]"
          >
            <div className="flex items-center gap-2 border-b p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Export AI Assistant</p>
                <p className="text-xs text-muted-foreground">Ask about IEC, HS Codes...</p>
              </div>
            </div>

            <div className="flex h-[350px] flex-col gap-3 overflow-y-auto p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    'flex gap-2 max-w-[85%]',
                    msg.sender === 'user' ? 'ml-auto flex-row-reverse' : '',
                  )}
                >
                  <div
                    className={cn(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
                      msg.sender === 'user' ? 'bg-muted' : 'bg-primary/10',
                    )}
                  >
                    {msg.sender === 'user' ? (
                      <User className="h-3.5 w-3.5" />
                    ) : (
                      <Bot className="h-3.5 w-3.5 text-primary" />
                    )}
                  </div>
                  <div
                    className={cn(
                      'rounded-lg px-3 py-2 text-sm',
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted',
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center gap-2 border-t p-3">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend()
                }}
                placeholder="Ask about IEC, HS Codes..."
                className="h-9 text-sm"
              />
              <Button
                size="icon"
                className="h-9 w-9 shrink-0"
                onClick={handleSend}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
