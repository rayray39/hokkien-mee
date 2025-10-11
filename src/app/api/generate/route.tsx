export async function POST(request: Request) {
    const { prompt } = await request.json();
    var message = '';           // message regarding the response (error/success)
    var generatedContent = '';  // the reponse from the openrouter LLM

    console.log(`prompt: ${prompt}`);

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "meta-llama/llama-3.3-8b-instruct:free",
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