import type { HealthValue } from 'react-native-health';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import type { SetterOrUpdater } from 'recoil';
import { atom } from 'recoil';

const DailyStepCountSamplesAtom = atom<Array<HealthValue>>({
    default: [],
    key: 'HealthDailyStepCount.Atom',
});

const ActiviySummaryAtom = atom<Array<HealthValue>>({
    default: [],
    key: 'HealthActiviySummary.Atom',
});

const StandTimeAtom = atom<Array<HealthValue>>({
    default: [],
    key: 'HealthStandTime.Atom',
});

const SleepSamplesAtom = atom<Array<HealthValue>>({
    default: [],
    key: 'HealthSleepSamples.Atom',
});

const HearthRateSamplesAtom = atom<Array<HealthValue>>({
    default: [],
    key: 'HealthHearthRateSamples.Atom',
});

const RestingHearthRateSamplesAtom = atom<Array<HealthValue>>({
    default: [],
    key: 'HealthRestingHearthRateSamples.Atom',
});

const BloodTypeAtom = atom<HealthValue | null>({
    default: null,
    key: 'HealthBloodType.Atom',
});

const HeightAtom = atom<HealthValue | null>({
    default: null,
    key: 'HealthHeight.Atom',
});

const WeightAtom = atom<HealthValue | null>({
    default: null,
    key: 'HealthWeight.Atom',
});

const BiologicalSexAtom = atom<HealthValue | null>({
    default: null,
    key: 'HealthBiologicalSex.Atom',
});

export const useDailyStepCountSamples = (): Array<HealthValue> => {
    return useRecoilValue(DailyStepCountSamplesAtom);
};
export const useSetDailyStepCountSamples = (): SetterOrUpdater<
    Array<HealthValue>
> => {
    return useSetRecoilState(DailyStepCountSamplesAtom);
};

export const useActivitySamples = (): Array<HealthValue> => {
    return useRecoilValue(ActiviySummaryAtom);
};
export const useSetActivitySamples = (): SetterOrUpdater<
    Array<HealthValue>
> => {
    return useSetRecoilState(ActiviySummaryAtom);
};

export const useStandTime = (): Array<HealthValue> => {
    return useRecoilValue(StandTimeAtom);
};
export const useSetStandTime = (): SetterOrUpdater<Array<HealthValue>> => {
    return useSetRecoilState(StandTimeAtom);
};

export const useSleepSamples = (): Array<HealthValue> => {
    return useRecoilValue(SleepSamplesAtom);
};
export const useSetSleepSamples = (): SetterOrUpdater<Array<HealthValue>> => {
    return useSetRecoilState(SleepSamplesAtom);
};

export const useHearthRateSamples = (): Array<HealthValue> => {
    return useRecoilValue(HearthRateSamplesAtom);
};
export const useSetHearthRateSamples = (): SetterOrUpdater<
    Array<HealthValue>
> => {
    return useSetRecoilState(HearthRateSamplesAtom);
};

export const useRestingHearthRateSamples = (): Array<HealthValue> => {
    return useRecoilValue(RestingHearthRateSamplesAtom);
};
export const useSetRestingHearthRateSamples = (): SetterOrUpdater<
    Array<HealthValue>
> => {
    return useSetRecoilState(RestingHearthRateSamplesAtom);
};

export const useBloodType = (): HealthValue | null => {
    return useRecoilValue(BloodTypeAtom);
};
export const useSetBloodType = (): SetterOrUpdater<HealthValue | null> => {
    return useSetRecoilState(BloodTypeAtom);
};

export const useHeight = (): HealthValue | null => {
    return useRecoilValue(HeightAtom);
};
export const useSetHeight = (): SetterOrUpdater<HealthValue | null> => {
    return useSetRecoilState(HeightAtom);
};

export const useWeight = (): HealthValue | null => {
    return useRecoilValue(WeightAtom);
};
export const useSetWeight = (): SetterOrUpdater<HealthValue | null> => {
    return useSetRecoilState(WeightAtom);
};

export const useBiologicalSex = (): HealthValue | null => {
    return useRecoilValue(BiologicalSexAtom);
};
export const useSetBiologicalSex = (): SetterOrUpdater<HealthValue | null> => {
    return useSetRecoilState(BiologicalSexAtom);
};
