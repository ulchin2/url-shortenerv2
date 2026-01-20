import { Input, Button, Box, InputGroup } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "../config";

function URLShortenerForm() {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{
    shortId: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setShortUrl(null);

  try {
    // 🚀 Pré-processar input: adicionar https:// se não tiver
    let urlToSend = destination || "";
    if (!/^https?:\/\//i.test(urlToSend)) {
      urlToSend = `https://${urlToSend}`;
    }

    const result = await axios
      .post(
        `${SERVER_ENDPOINTS}/api/url`,
        { destination: urlToSend }, // enviar URL corrigida
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((resp) => resp.data);

    setShortUrl(result);
  } catch (err: any) {
    console.error("Erro ao criar short URL:", err.response?.data);
  }
}

  return (
    <Box pos="relative" zIndex="2" backgroundColor="white" padding="6">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            onChange={(e: any) => setDestination(e.target.value)}
            placeholder="https://example.com"
          />
          <Button type="submit">CREATE</Button>
        </InputGroup>
      </form>
      {shortUrl && (
        <a href={`/${shortUrl?.shortId}`}>
          {window.location.origin}/{shortUrl?.shortId}
        </a>
      )}
    </Box>
  );
}

export default URLShortenerForm;
