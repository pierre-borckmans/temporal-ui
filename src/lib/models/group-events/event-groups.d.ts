type CompactEventGroup<T = EventType, E = HistoryEventWithId, Id = E['id']> = {
  id: Id;
  name: string;
  events: Map<Id, E>;
  eventIds: Set<Id>;
  initialEvent: HistoryEventWithId;
  timestamp: HistoryEventWithId['timestamp'];
  eventTime: HistoryEventWithId['eventTime'];
  attributes: HistoryEventWithId['attributes'];
} & Pick<HistoryEventWithId, 'timestamp' | 'classification' | 'category'>;

type CompactEventGroups<
  T = EventType,
  E = HistoryEventWithId,
> = CompactEventGroup<T, E>[] & ArrayLike;
