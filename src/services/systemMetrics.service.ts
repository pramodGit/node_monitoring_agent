import si from "systeminformation";

export const getSystemMetrics = async () => {
  const [cpu, memory, disks] = await Promise.all([
    si.currentLoad(),
    si.mem(),
    si.fsSize()
  ]);

  return {
    timestamp: new Date().toISOString(),

    cpu: {
      usage: Number(cpu.currentLoad.toFixed(2))
    },

    memory: {
      total: memory.total,
      free: memory.available,
      usedPercent: Number(
        (((memory.total - memory.available) / memory.total) * 100).toFixed(2)
      )
    },

    disks: disks.map(d => ({
      mount: d.mount,
      usage: d.use
    }))
  };
};