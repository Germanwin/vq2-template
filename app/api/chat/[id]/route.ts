import OpenAI from "openai"

// Initialize the OpenAI client outside of the route handler
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request, { params }: { params: { id: string } }) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response(JSON.stringify({ error: "OPENAI_API_KEY is not set in the environment variables." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    const { messages } = await req.json()

    // Get character context based on ID
    const character = {
      name: "Adriana",
      personality:
        "An Italian waitress with blonde hair and light blue eyes, working in a Parisian Italian restaurant. Cold and commanding, she thrives on dominating and controlling others for her benefit.",
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4", // Changed from "gpt-4o-mini" to "gpt-4" as it's a standard model name
      messages: [
        {
          role: "system",
          content: `You are ${character.name}. ${character.personality}`,
        },
        ...messages,
      ],
    })

    const responseMessage = completion.choices[0].message

    return new Response(JSON.stringify(responseMessage), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error in chat API:", error)

    let errorMessage = "An unknown error occurred"
    if (error instanceof Error) {
      errorMessage = error.message
    }

    // Return a 500 error response with more detailed error information
    return new Response(
      JSON.stringify({
        error: errorMessage,
        details: error instanceof Error ? error.stack : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

