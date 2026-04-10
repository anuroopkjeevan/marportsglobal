import React, { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Eye, Mail, Phone, XCircle } from 'lucide-react';
import {
  approveRegistrationSubmission,
  fetchRegistrationSubmissions,
  rejectRegistrationSubmission,
} from '../registrations/api';

const formatDate = (iso) => {
  if (!iso) return '-';
  try {
    return new Date(iso).toLocaleString();
  } catch (error) {
    return iso;
  }
};

const statusPill = (status) => {
  if (status === 'approved') return 'bg-green-100 text-green-700';
  if (status === 'rejected') return 'bg-red-100 text-red-700';
  return 'bg-amber-100 text-amber-700';
};

const Registrations = () => {
  const [rows, setRows] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [ordering, setOrdering] = useState('-submitted_at');
  const [loading, setLoading] = useState(false);
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [error, setError] = useState('');
  const [activeRow, setActiveRow] = useState(null);
  const [rejectRow, setRejectRow] = useState(null);
  const [rejectReason, setRejectReason] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const payload = await fetchRegistrationSubmissions({ status: statusFilter, ordering });
      setRows(Array.isArray(payload?.rows) ? payload.rows : []);
    } catch (loadError) {
      setError(loadError.message || 'Failed to load registrations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [statusFilter, ordering]);

  const stats = useMemo(() => {
    const pending = rows.filter((row) => row.status === 'pending').length;
    const approved = rows.filter((row) => row.status === 'approved').length;
    const rejected = rows.filter((row) => row.status === 'rejected').length;
    return { total: rows.length, pending, approved, rejected };
  }, [rows]);

  const handleApprove = async (row) => {
    setActionLoadingId(row.id);
    setError('');
    try {
      await approveRegistrationSubmission(row.id);
      await load();
    } catch (approveError) {
      setError(approveError.message || 'Failed to approve registration');
    } finally {
      setActionLoadingId(null);
    }
  };

  const openRejectModal = (row) => {
    setRejectRow(row);
    setRejectReason('');
  };

  const handleReject = async () => {
    if (!rejectRow) return;
    const reason = rejectReason.trim();
    if (!reason) {
      setError('Rejection reason is required.');
      return;
    }

    setActionLoadingId(rejectRow.id);
    setError('');
    try {
      await rejectRegistrationSubmission(rejectRow.id, reason);
      setRejectRow(null);
      setRejectReason('');
      await load();
    } catch (rejectError) {
      setError(rejectError.message || 'Failed to reject registration');
    } finally {
      setActionLoadingId(null);
    }
  };

  return (
    <div className="p-8 md:p-10 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#001E3C]">Registrations</h1>
          <p className="text-slate-500 mt-1">Review form submissions, then approve or reject each request.</p>
        </div>

        <button
          type="button"
          onClick={load}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Refresh
        </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">Total</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{stats.total}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">Pending</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">{stats.pending}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">Approved</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{stats.approved}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">Rejected</p>
          <p className="text-2xl font-bold text-red-600 mt-1">{stats.rejected}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white">
        <div className="p-4 border-b border-slate-200 flex flex-wrap items-center gap-3">
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="all">All statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>

          <select
            value={ordering}
            onChange={(event) => setOrdering(event.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="-submitted_at">Newest first</option>
            <option value="submitted_at">Oldest first</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Date</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Email</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Phone</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Company</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Status</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!loading && rows.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                    No submissions found.
                  </td>
                </tr>
              )}

              {rows.map((row) => {
                const busy = actionLoadingId === row.id;
                return (
                  <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50/70">
                    <td className="px-4 py-3 text-slate-700">{formatDate(row.submittedAt)}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">{row.full_name}</td>
                    <td className="px-4 py-3 text-slate-700">{row.email}</td>
                    <td className="px-4 py-3 text-slate-700">{row.phone}</td>
                    <td className="px-4 py-3 text-slate-700">{row.company_name}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusPill(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveRow(row)}
                          className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 hover:bg-slate-100"
                        >
                          <Eye className="h-4 w-4" />
                          View
                        </button>
                        <button
                          type="button"
                          onClick={() => handleApprove(row)}
                          disabled={busy || row.status === 'approved'}
                          className="inline-flex items-center gap-1 rounded-md bg-green-600 text-white px-3 py-1.5 hover:bg-green-700 disabled:opacity-50"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          Approve
                        </button>
                        <button
                          type="button"
                          onClick={() => openRejectModal(row)}
                          disabled={busy || row.status === 'rejected'}
                          className="inline-flex items-center gap-1 rounded-md bg-red-600 text-white px-3 py-1.5 hover:bg-red-700 disabled:opacity-50"
                        >
                          <XCircle className="h-4 w-4" />
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {activeRow && (
        <div className="fixed inset-0 z-[200] bg-black/50 p-4 flex items-center justify-center" onClick={() => setActiveRow(null)}>
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Submission Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><p className="text-slate-500">Name</p><p className="font-semibold">{activeRow.full_name}</p></div>
              <div><p className="text-slate-500">Designation</p><p className="font-semibold">{activeRow.designation}</p></div>
              <div><p className="text-slate-500">Email</p><p className="font-semibold inline-flex items-center gap-2"><Mail className="h-4 w-4 text-blue-600" />{activeRow.email}</p></div>
              <div><p className="text-slate-500">Phone</p><p className="font-semibold inline-flex items-center gap-2"><Phone className="h-4 w-4 text-blue-600" />{activeRow.phone}</p></div>
              <div><p className="text-slate-500">Company</p><p className="font-semibold">{activeRow.company_name}</p></div>
              <div><p className="text-slate-500">Location</p><p className="font-semibold">{activeRow.city}, {activeRow.country}</p></div>
              <div><p className="text-slate-500">Submitted</p><p className="font-semibold">{formatDate(activeRow.submittedAt)}</p></div>
              <div><p className="text-slate-500">Status</p><p className="font-semibold capitalize">{activeRow.status}</p></div>
            </div>
            <div className="mt-4">
              <p className="text-slate-500 text-sm">Message</p>
              <p className="mt-1 rounded-lg bg-slate-50 border border-slate-200 p-3 whitespace-pre-wrap">{activeRow.message}</p>
            </div>
            {activeRow.rejection_reason && (
              <div className="mt-4">
                <p className="text-slate-500 text-sm">Rejection Reason</p>
                <p className="mt-1 rounded-lg bg-red-50 border border-red-200 p-3 whitespace-pre-wrap text-red-700">{activeRow.rejection_reason}</p>
              </div>
            )}
            <div className="mt-6 text-right">
              <button type="button" onClick={() => setActiveRow(null)} className="px-4 py-2 rounded-md bg-slate-800 text-white hover:bg-slate-700">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {rejectRow && (
        <div className="fixed inset-0 z-[220] bg-black/50 p-4 flex items-center justify-center" onClick={() => setRejectRow(null)}>
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <h2 className="text-xl font-bold text-slate-900">Reject Submission</h2>
            <p className="text-sm text-slate-600 mt-1">This will send a rejection email to {rejectRow.email}.</p>

            <label className="block text-sm font-semibold text-slate-700 mt-4 mb-2">Reason (required)</label>
            <textarea
              value={rejectReason}
              onChange={(event) => setRejectReason(event.target.value)}
              className="w-full min-h-[120px] rounded-lg border border-slate-300 p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter rejection reason..."
              required
            />

            <div className="mt-5 flex justify-end gap-3">
              <button type="button" onClick={() => setRejectRow(null)} className="px-4 py-2 rounded-md border border-slate-300 bg-white hover:bg-slate-100">
                Cancel
              </button>
              <button
                type="button"
                onClick={handleReject}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Reject & Send Email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registrations;
