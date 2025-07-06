"use client";

const schedule = [
  { day: "Monday", class: "Hatha Yoga", time: "7:00 AM – 8:00 AM" },
  { day: "Wednesday", class: "Power Yoga", time: "6:00 PM – 7:00 PM" },
  { day: "Friday", class: "Restorative Yoga", time: "8:00 AM – 9:00 AM" },
];

export default function ScheduleSection() {
  return (
    <section className="py-24 px-6 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Weekly Class Schedule</h2>
        <div className="space-y-6 text-left">
          {schedule.map((s, i) => (
            <div key={i} className="flex justify-between bg-gray-100 p-4 rounded-md">
              <span className="font-semibold">{s.day}</span>
              <span>{s.class}</span>
              <span className="text-gray-500">{s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
