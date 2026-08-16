import { QUESTIONS } from '@/app/funnel/questions';

interface SubmitRequestBody {
  answers: Record<string, string | string[]>;
  email: string;
}

function isValidBody(body: unknown): body is SubmitRequestBody {
  if (!body || typeof body !== 'object') return false;
  const { answers, email } = body as Record<string, unknown>;
  return (
    typeof email === 'string' &&
    answers !== null &&
    typeof answers === 'object'
  );
}

function formatAnswer(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(', ') : '(no answer)';
  }
  return value?.trim() || '(no answer)';
}

function formatTelegramMessage(
  answers: Record<string, string | string[]>,
  email: string,
): string {
  const questionLines = QUESTIONS.map((question) => {
    const answer = formatAnswer(answers[`q${question.id}`]);
    return `${question.id}. ${question.text} — ${answer}`;
  });

  return [
    'New Nook quiz submission',
    `Name — ${formatAnswer(answers.name)}`,
    `Gender — ${formatAnswer(answers.gender)}`,
    `Age — ${formatAnswer(answers.age)}`,
    ...questionLines,
    `Email — ${email}`,
  ].join('\n');
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      throw new Error('Request body must be valid JSON');
    }

    if (!isValidBody(body)) {
      throw new Error('Request body must include "answers" and "email"');
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      throw new Error('Telegram is not configured on the server');
    }

    const message = formatTelegramMessage(body.answers, body.email);

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      },
    );

    if (!telegramResponse.ok) {
      const errorBody = await telegramResponse.text();
      throw new Error(`Telegram API error: ${errorBody}`);
    }

    return Response.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return Response.json({ success: false, error: message }, { status: 500 });
  }
}
