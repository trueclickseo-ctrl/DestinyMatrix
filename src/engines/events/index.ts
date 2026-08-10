export type EventType =
  | 'CalculatorCompleted'
  | 'ReportGenerated'
  | 'LocaleChanged'
  | 'SearchPerformed'
  | 'RecommendationViewed';

export interface PlatformEvent<T = any> {
  type: EventType;
  timestamp: string;
  payload: T;
}

export type EventCallback<T = any> = (event: PlatformEvent<T>) => void;

export class EventBus {
  private static listeners: Map<EventType, EventCallback[]> = new Map();

  static on<T>(type: EventType, callback: EventCallback<T>) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, []);
    }
    this.listeners.get(type)!.push(callback);
  }

  static emit<T>(type: EventType, payload: T) {
    const event: PlatformEvent<T> = {
      type,
      timestamp: new Date().toISOString(),
      payload,
    };
    const callbacks = this.listeners.get(type) || [];
    callbacks.forEach((cb) => cb(event));
  }
}
