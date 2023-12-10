import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const API = "http://10.0.2.2:3000/tasks";

export const getTasks = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const getTask = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const saveTask = async (newTask) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  return await res.json();
};

export const deleteTask = async (id) => {
  fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const updateTask = async (id, newTask) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { 
      Accept: "application/json", 
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(newTask),
  });
  return res;
};
