export async function POST(request: Request) {
    const { prompt } = await request.json();
    let message = '';           // message regarding the response (error/success)
    let generatedContent = '';  // the reponse from the openrouter LLM

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "HTTP-Referer": "https://hokkienmee.vercel.app",
                "X-Title": "hokkienmee", 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "mistralai/mistral-7b-instruct:free",
                "messages": [
                    {
                        "role": "user",
                        "content": `${prompt}`
                    }
                ]
            })
        });

        if (response.ok) {
            const data = await response.json();
            generatedContent = data.choices[0].message.content;
            message = 'Openrouter POST request successful.'
        } else {
            console.log(response.status);
            message = 'Response error.';
        }
    } catch (error) {
        message = 'Error in sending prompt to openrouter.';
    } finally {
        return Response.json({
            message: message,
            generatedContent: generatedContent
        })
    }
}