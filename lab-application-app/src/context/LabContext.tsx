import React, {createContext, useContext,useState,ReactNode,} from 'react';

type SampleStatus =
  | 'pending'
  | 'collected'
  | 'processing'
  | 'completed';

type LabContextType = {
  // Collector
  selectedCollectors: string[];
  collectorAssigned: boolean;
  assignCollector: () => void;

  // Sample
  sampleStatus: SampleStatus;
  sampleCollected: boolean;
  sampleProcessing: boolean;

  setSampleCollected: (value: boolean) => void;
  setSampleProcessing: (value: boolean) => void;

  markProcessing: () => void;
  markCompleted: () => void;
  resetSample: () => void;
};

const LabContext = createContext<LabContextType | undefined>(undefined);

export function LabProvider({ children }: { children: ReactNode }) {
  // -------------------------
  // Collector
  // -------------------------

  const [selectedCollectors, setSelectedCollectors] = useState<string[]>([]);

const collectorAssigned = selectedCollectors.length > 0;

const assignCollector = () => {
  setSelectedCollectors(prev => {
    if (prev.length === 0) {
      return ['Ravi Kumar'];
    }

    if (prev.length === 1) {
      return [...prev, 'Ravi Kumar'];
    }

    return prev;
  });
};

  // -------------------------
  // Sample
  // -------------------------

  const [sampleStatus, setSampleStatus] =
    useState<SampleStatus>('pending');

  const [sampleCollected, setSampleCollected] = useState(false);

  const [sampleProcessing, setSampleProcessing] = useState(false);

  // -------------------------
  // Start processing
  // -------------------------

  const markProcessing = () => {
    setSampleStatus('processing');
    setSampleProcessing(true);
  };

  // -------------------------
  // Complete sample
  // -------------------------

  const markCompleted = () => {
    setSampleStatus('completed');
    setSampleProcessing(false);
  };

const resetSample = () => {
  setSampleStatus('collected');
  setSampleCollected(true);
  setSampleProcessing(false);
};

  return (
    <LabContext.Provider
      value={{
        // Collector
       selectedCollectors,
collectorAssigned,
assignCollector,

        // Sample
        sampleStatus,
        sampleCollected,
        sampleProcessing,

        setSampleCollected,
        setSampleProcessing,

        markProcessing,
        markCompleted,
        resetSample,
      }}
    >
      {children}
    </LabContext.Provider>
  );
}

export function useLab() {
  const context = useContext(LabContext);

  if (!context) {
    throw new Error('useLab must be used inside LabProvider');
  }

  return context;
}