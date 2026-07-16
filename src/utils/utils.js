export const getNextDateForDay = (day, time) => {
  const daysOfWeek = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  // 🛑 Validate inputs
  if (!day || !time) {
    console.error("❌ Missing day or time:", { day, time });
    return null;
  }

  const now = new Date();
  const date = new Date();
  const dayIndex = daysOfWeek[day];

  if (dayIndex === undefined) {
    console.error("❌ Invalid day value:", day);
    return null;
  }

  // Calculate next occurrence of selected day
  const diff = (dayIndex + 7 - now.getDay()) % 7;
  date.setDate(now.getDate() + diff);

  // 🕒 Parse time safely
  const timeMatch = time.match(/(\d{1,2}):(\d{2})\s*(am|pm)?/i);
  if (!timeMatch) {
    console.error("❌ Invalid time format:", time);
    return null;
  }

  let [_, h, m, ampm] = timeMatch;
  let hours = parseInt(h, 10);
  let minutes = parseInt(m, 10);

  if (ampm) {
    ampm = ampm.toLowerCase();
    if (ampm === "pm" && hours !== 12) hours += 12;
    if (ampm === "am" && hours === 12) hours = 0;
  }

  date.setHours(hours, minutes, 0, 0);

  // End time = 50 minutes later
  const endDate = new Date(date.getTime() + 50 * 60000);

  return { start: date.toISOString(), end: endDate.toISOString() };
};
