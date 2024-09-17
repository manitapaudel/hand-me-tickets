"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { TicketType } from "@/app/(utils)/types";

type Props = {
  ticket: TicketType | { _id: string };
};

const TicketForm = ({ ticket }: Props) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  // Type narrowing; the 'in' operator checks if the object has a title property
  if ("title" in ticket) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to Update Ticket");
      }
    } else {
      const res = await fetch("/api/tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to Create Ticket");
      }
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update" : "Create"} Your Ticket</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required
          value={formData.title}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows={5}
        />

        <label htmlFor="title">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label htmlFor="priority">Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="priority-1">1</label>

          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="priority-2">2</label>

          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label htmlFor="priority-3">3</label>

          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label htmlFor="priority-4">4</label>

          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label htmlFor="priority-5">5</label>
        </div>

        <label htmlFor="progress">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label htmlFor="status">Status</label>
        <select
          name="status"
          value={formData.status}
          id="status"
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={`${EDITMODE ? "Update" : "Create"} Ticket`}
        />
      </form>
    </div>
  );
};

export default TicketForm;
