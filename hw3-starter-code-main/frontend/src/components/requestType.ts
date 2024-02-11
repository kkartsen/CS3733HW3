export type request = {
    name: string
    priority: Priority
    location: string
    fromLanguage: string
    toLanguage: string
    timeSchedule: string
    day: string
    month: string
    time: string
    repeat: string
    status: Status
}

export enum Priority {
    low = "Low",
    medium = "Medium",
    high = "High",
    emergency = "Emergency"
}

export enum Status {
    unassgined = "Unassigned",
    assigned = "Assigned",
    inProgress = "In Progress",
    completed = "Completed"
}