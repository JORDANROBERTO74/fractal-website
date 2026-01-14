// Stub hooks for dashboard functionality
// These are placeholders for actual implementation

export interface DashboardStatsOverall {
  // Add actual types when implementing
  [key: string]: any
}

export interface DashboardLevel2BreakdownResponse {
  results?: any[]
  count?: number
  num_pages?: number
  [key: string]: any
}

export interface DashboardLevel2BreakdownItem {
  [key: string]: any
}

export interface DashboardChartDataResponse {
  [key: string]: any
}

export function useDashboardStats(params?: any) {
  return { data: { overall: undefined } as any, isLoading: false, error: null }
}

export function useDashboardLevel2Breakdown(params?: any) {
  return { data: { results: [] } as any, isLoading: false, error: null }
}

export function useDashboardChartData(params?: any) {
  return { data: undefined, isLoading: false, error: null }
}
